import { CommonModule } from '@angular/common';
import { Component, OnInit, effect, inject } from '@angular/core';
import { IColumns, ISendDataTable } from '../../interfaces/table.interface';
import { columnsUser, dataFormUser, formularioUser } from './user.data';
import { TableComponent } from '../../components/table/table.component';
import { UsersService } from '../../services/users.service';
import { IRoles, IUsers } from '../../interfaces/users';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';


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
  columnsUser: IColumns<IUsers>[] = columnsUser;
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

  defectColumnAction(dataComponent: ISendDataTable): void {
    if(dataComponent.action == 'add'){
      this.openDialog();
    }
    if(dataComponent.action == 'edit'){
      this.editDataDialog(dataComponent.data);
    }
    // if(dataComponent.action == 'delete'){
    //   this.deleteData(dataComponent.data);
    // }
  }

  openDialog(): void {
    formularioUser.dataForm.map(form => {
      if(form.typeInput == 'text'){
        form.value = ''
      }
      if(form.typeInput == 'boolean'){
        form.value = false
      }
    });

    const dialogRef = this.dialog.open(FormularioComponent, {
      data: formularioUser,
    });

    dialogRef.afterClosed().subscribe(result => {
      result.password = '12345678';
      this.userService.postUsers(result)
    })
  }

  editDataDialog(data: IUsers): void {
    // const findNameUser = formularioUser.dataForm.find(form => form.formControl == 'nameUser');
    // const findLastnameUser = formularioUser.dataForm.find(form => form.formControl == 'lastnameUser');
    // const findRoles = formularioUser.dataForm.find(form => form.formControl == 'rolId');
    // const findActive = formularioUser.dataForm.find(form => form.formControl == 'active');

    // if(findRoles && findNameUser && findLastnameUser && findActive){
    //   findRoles.value = data.rolId;
    //   findNameUser.value = data.nameUser;
    //   findLastnameUser.value = data.lastnameUser;
    //   findActive.value = data.active;
    // }

    formularioUser.dataForm.map(form => {
      const findByName = formularioUser.dataForm.find(loquesea => loquesea.formControl == form.formControl);
      if(findByName){
        findByName.value = data[form.formControl as keyof IUsers]
      }
    })

    const dialogRef = this.dialog.open(FormularioComponent, {
      data: formularioUser,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        result.idUser = data.idUser;
        this.userService.putUsers(result);
      }
    })
  }

}
