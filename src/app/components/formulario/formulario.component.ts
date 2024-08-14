import { ZonasService } from './../../services/zonas.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IDataForm,
  IFormulario,
  ReturnSelect,
} from '../../interfaces/fromulario.interface';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  effect,
  inject,
  signal,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { IZona } from '../../interfaces/inventario';
import { MatDatepickerIntl, MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_NATIVE_DATE_FORMATS, MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatFormField,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    { provide: DateAdapter, useClass: NativeDateAdapter },
  { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS }
],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent implements OnInit {
  readonly data = inject<IFormulario>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<FormularioComponent>);

  // private readonly _adapter = inject<DateAdapter<unknown, unknown>>(DateAdapter);
  // private readonly _intl = inject(MatDatepickerIntl);
  // private readonly _locale = signal(inject<unknown>(MAT_DATE_LOCALE));

  zonasService = inject(ZonasService);
  selectEmpy: IDataForm | any = {} as IDataForm;
  selectAutoCompleted: IDataForm | any = {} as IDataForm;

  globalForm: FormGroup = new FormGroup({});

  constructor() {
    effect(() => {
      if (this.selectEmpy) {
        this.selectEmpy.option = this.zonasService.getZonaData().map((zona: IZona) => {
          return {
            label: zona.zona,
            value: zona.idZona,
          };
        });
      }
    });
  }

  ngOnInit(): void {
    // this._locale.set('es');
    // this._adapter.setLocale(this._locale());

    this.data.dataForm.map((form: IDataForm) => {
      if (form.typeInput == 'date') {
        this.globalForm.addControl(form.formControl, new FormControl(new Date(), [Validators.required]));
      } else {
        this.globalForm.addControl(form.formControl, new FormControl(form.value, [Validators.required]));
      }
    });

    this.selectEmpy = this.data.dataForm.find((form) => form.typeInput == 'select' && form.option?.length == 0);
    const detectChangeForm = this.data.dataForm.find((form) => form.main == true);

    if (detectChangeForm) {
      this.globalForm.get(detectChangeForm?.formControl)?.valueChanges.subscribe(result => {
        this.zonasService.getZonasByAlmacen(result);
      })
    }

    const detectAutoCompleteMainSelect = this.data.dataForm.find((form) => form.autocomplete == true);
    const findAutoCompleteFill = this.data.dataForm.filter(form => form.autoFill == true);
    const dataOptions = detectAutoCompleteMainSelect?.option?.map(opt =>opt.data);

    if (detectAutoCompleteMainSelect && findAutoCompleteFill) {

      this.globalForm.get(detectAutoCompleteMainSelect?.formControl)?.valueChanges.subscribe(result => {
        this.zonasService.getZonasByAlmacen(result);
        const findData = dataOptions?.find(idOrder => idOrder.idOrdenCompra == result);
        const findDataInv = dataOptions?.find(inv => inv.idInventario == result);

        if(findData){
          findAutoCompleteFill.map((form: IDataForm) => {
            this.globalForm.controls[form.formControl].setValue(findData[form.formControl])
          })
        }

        if(findDataInv){
          this.globalForm.get('cantidad')?.clearValidators();
          this.globalForm.get('cantidad')?.setValidators(Validators.max(findDataInv.cantidad));
          findAutoCompleteFill.map((form: IDataForm) => {
            this.globalForm.controls[form.formControl].setValue(findDataInv[form.formControl])
          })
        }
      })
    }
  }

  onSubmitFormulario(): void {
    this.dialogRef.close(this.globalForm.value);
  }
}
