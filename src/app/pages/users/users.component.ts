import { CommonModule } from '@angular/common';
import { Component, OnInit, effect, inject } from '@angular/core';
import { IColumns } from '../../interfaces/table.interface';
import { columnsUser, dataFormUser, formularioUser } from './user.data';
import { TableComponent } from '../../components/table/table.component';
import { UsersService } from '../../services/users.service';
import { IRoles, IUsers } from '../../interfaces/users';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
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
