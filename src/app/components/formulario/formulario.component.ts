import { ZonasService } from './../../services/zonas.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
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
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { IZonas } from '../../interfaces/inventario';

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
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent implements OnInit {
  readonly data = inject<IFormulario>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<FormularioComponent>);

  zonasService = inject(ZonasService);
  selectEmpy: IDataForm | any = {} as IDataForm;

  globalForm = new FormGroup({});

  constructor() {
    effect(() => {
      this.selectEmpy.option = this.zonasService.getZonaData().map((zona: IZonas) => {
          return {
            label: zona.zona,
            value: zona.idZona,
          };
        });
    });
  }

  ngOnInit(): void {
    this.data.dataForm.map((form: IDataForm) => {
      this.globalForm.addControl(form.formControl, new FormControl(form.value));
    });

    this.selectEmpy = this.data.dataForm.find((form) => form.typeInput == 'select' && form.option?.length == 0);
    const detectChangeForm = this.data.dataForm.find((form) => form.main == true );

    if(detectChangeForm){
      this.globalForm.get(detectChangeForm?.formControl)?.valueChanges.subscribe(result => {
        this.zonasService.getZonasByAlmacen(result);
      })
    }
  }

  onSubmitFormulario(): void {
    this.dialogRef.close(this.globalForm.value);
  }
}
