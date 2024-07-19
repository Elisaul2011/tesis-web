import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { MatDialog } from '@angular/material/dialog';

import { IColumns } from '../../interfaces/table.interface';
import { columnsUser, dataFormUser, formularioUser } from './inspeccion.data';

import { UsersService } from '../../services/users.service';
import { IRoles, IUsers } from '../../interfaces/users';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { MatButtonModule } from '@angular/material/button';



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
  columnsUser: IColumns[] = columnsUser;
  dataUser: IUsers[] = [];

  userService = inject(UsersService);
  dialog = inject(MatDialog);

  constructor(){
    effect(() => {
      this.dataUser = this.userService.getUserData();
      this.userService.getUserRolsData();

      const findRolesForm = formularioUser.dataForm.find(form => form.formControl == 'rolId');
      if(findRolesForm){
        findRolesForm.option = this.userService.getUserRolsData().map((roles: IRoles) => {
          return {
            label: roles.rol,
            value: roles.idRol
          }
        });
      }
    })
  }

  ngOnInit(): void {
    this.userService.getUsers();
    this.userService.getUsersRoles();
  }

  openDialog(): void {
    formularioUser.dataForm.map(form => form.value = '');

    const dialogRef = this.dialog.open(FormularioComponent, {
      data: formularioUser,
    });

    dialogRef.afterClosed().subscribe(result => {
      result.password = '12345678';
      this.userService.postUsers(result)
    })
  }

  editDataDialog(data: IUsers): void {
    const findNameUser = formularioUser.dataForm.find(form => form.formControl == 'nameUser');
    const findLastnameUser = formularioUser.dataForm.find(form => form.formControl == 'lastnameUser');
    const findRoles = formularioUser.dataForm.find(form => form.formControl == 'rolId');

    // dataFormUser.map(form => {
    //   const findForm = formularioUser.dataForm.find(form => form.formControl == form.formControl);

    //   if(findForm){
    //     findForm.value = data[form.formControl];
    //   }
    // });

    if(findRoles && findNameUser && findLastnameUser){
      findRoles.value = data.rolId;
      findNameUser.value = data.nameUser;
      findLastnameUser.value = data.lastnameUser;
    }

    const dialogRef = this.dialog.open(FormularioComponent, {
      data: formularioUser,
    });

    formularioUser.dataForm.push({
      label: '',
      formControl: 'idUser',
      value: data.idUser,
      required: false,
      typeInput: ''
    });

    dialogRef.afterClosed().subscribe(result => {
      result.password = '12345678';
      this.userService.putUsers(result)
    })
  }
}
