import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { IColumns, IConfigTable } from '../../interfaces/table.interface';
import { columnsShelfLife, formularioShelfLife } from './shelfLife.data';
import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { TableComponent } from "../../components/table/table.component";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-shelf-life',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    MatButtonModule
],
  templateUrl: './shelfLife.component.html',
  styleUrl: './shelfLife.component.css',
})
export class ShelfLifeComponent {

  columnsShelfLife: IColumns[] = columnsShelfLife;
  dataSL: any[] = [];
  SLConfigTable: IConfigTable={btnAdd: false}


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
    formularioShelfLife.dataForm.map(form => form.value = '');

    const dialogRef = this.dialog.open(FormularioComponent, {
      data: formularioShelfLife,
    });

    dialogRef.afterClosed().subscribe(result => {

    })
  }

  editDataDialog(data: any): void {
    const findNameUser = formularioShelfLife.dataForm.find(form => form.formControl == 'nameUser');
    const findLastnameUser = formularioShelfLife.dataForm.find(form => form.formControl == 'lastnameUser');
    const findRoles = formularioShelfLife.dataForm.find(form => form.formControl == 'rolId');

    // if(findRoles && findNameUser && findLastnameUser){
    //   findRoles.value = data.rolId;
    //   findNameUser.value = data.nameUser;
    //   findLastnameUser.value = data.lastnameUser;
    // }

    const dialogRef = this.dialog.open(FormularioComponent, {
      data: formularioShelfLife,
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
