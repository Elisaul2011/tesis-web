import { CommonModule } from '@angular/common';
import { Component, effect, inject, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { columnsNecesidades, formularioNecesidades } from './necesidades.data';
import { IColumns } from '../../interfaces/table.interface';

import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-necesidades',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent
  ],
  templateUrl: './necesidades.component.html',
  styleUrl: './necesidades.component.css',
})
export class NecesidadesComponent {
  columnsNecesidades: IColumns[] = columnsNecesidades;
  dataNecesidades: any[] = [];


  dialog = inject(MatDialog);

  constructor(){
    effect(() => {


      // const findRolesForm = formularioUser.dataForm.find(form => form.formControl == 'rolId');
      // if(findRolesForm){
      //   findRolesForm.option = this.userService.getUserRolsData().map((roles: IRoles) => {
      //     return {
      //       label: roles.rol,
      //       value: roles.idRol
      //     }
      //   });
      // }
    })
  }

  ngOnInit(): void {

  }

  openDialog(): void {
    formularioNecesidades.dataForm.map(form => form.value = '');

    const dialogRef = this.dialog.open(FormularioComponent, {
      data: formularioNecesidades,
    });

    dialogRef.afterClosed().subscribe(result => {

    })
  }

  editDataDialog(data: any): void {
    const findNameUser = formularioNecesidades.dataForm.find(form => form.formControl == 'nameUser');
    const findLastnameUser = formularioNecesidades.dataForm.find(form => form.formControl == 'lastnameUser');
    const findRoles = formularioNecesidades.dataForm.find(form => form.formControl == 'rolId');

    // if(findRoles && findNameUser && findLastnameUser){
    //   findRoles.value = data.rolId;
    //   findNameUser.value = data.nameUser;
    //   findLastnameUser.value = data.lastnameUser;
    // }

    const dialogRef = this.dialog.open(FormularioComponent, {
      data: formularioNecesidades,
    });

    // formularioUser.dataForm.push({
    //   label: '',
    //   formControl: 'idUser',
    //   value: data.idUser,
    //   required: false,
    //   typeInput: ''
    // });

    dialogRef.afterClosed().subscribe(result => {

    })
  }
}
