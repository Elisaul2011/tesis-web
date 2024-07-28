import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IDataForm, IFormulario } from '../../interfaces/fromulario.interface';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Component, OnInit, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

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
    MatSlideToggleModule
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent implements OnInit{

  readonly data = inject<IFormulario>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<FormularioComponent>);

  globalForm = new FormGroup({
  });

  ngOnInit(): void {
    this.data.dataForm.map((form: IDataForm) => {
      this.globalForm.addControl(form.formControl, new FormControl(form.value))
    });
  }

  onSubmitFormulario(): void {
    this.dialogRef.close(this.globalForm.value)
  }
}
