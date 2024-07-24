import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { MatDialog } from '@angular/material/dialog';
import { IColumns } from '../../interfaces/table.interface';
import { columnsInspeccion, dataFormInspeccion, formularioInspeccion, inspeccion } from './inspeccion.data';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { MatButtonModule } from '@angular/material/button';
import { IInspeccion } from '../../interfaces/inspeccion';



@Component({
  selector: 'app-inspeccion',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    MatButtonModule
  ],
  templateUrl: './inspeccion.component.html',
  styleUrl: './inspeccion.component.css',
})
export class InspeccionComponent {
  columnsUser: IColumns[] = columnsInspeccion;
  dataInspeccion: IInspeccion[] = inspeccion;

  dialog = inject(MatDialog);

  constructor(){
    effect(() => {

    })
  }

  ngOnInit(): void {

  }

  openDialog(): void {
    formularioInspeccion.dataForm.map(form => form.value = '');

    const dialogRef = this.dialog.open(FormularioComponent, {
      data: formularioInspeccion,
    });

    dialogRef.afterClosed().subscribe(result => {
      result.id=this.dataInspeccion.length+1;
      this.dataInspeccion.push(result)
    })
  }

  editDataDialog(data: IInspeccion): void {
    const findNameUser = formularioInspeccion.dataForm.find(form => form.formControl == 'nameUser');
    const findLastnameUser = formularioInspeccion.dataForm.find(form => form.formControl == 'lastnameUser');
    const findRoles = formularioInspeccion.dataForm.find(form => form.formControl == 'rolId');

    // dataFormUser.map(form => {
    //   const findForm = formularioUser.dataForm.find(form => form.formControl == form.formControl);

    //   if(findForm){
    //     findForm.value = data[form.formControl];
    //   }
    // });



    const dialogRef = this.dialog.open(FormularioComponent, {
      data: formularioInspeccion,
    });

    formularioInspeccion.dataForm.push({
      label: '',
      formControl: 'id',
      value: data.id,
      required: false,
      typeInput: ''
    });

    dialogRef.afterClosed().subscribe(result => {
      result.id=this.dataInspeccion.length+1;
      this.dataInspeccion.push(result)
    })
  }
}
