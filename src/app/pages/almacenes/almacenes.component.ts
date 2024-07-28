import { CommonModule } from '@angular/common';
import { Component, effect, inject, OnInit } from '@angular/core';
import { almacenService } from '../../services/almacen.service';
import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { columnsAlmacenes, formularioAlmacenes } from './almacenes.data';
import { IColumns } from '../../interfaces/table.interface';

import { TableComponent } from '../../components/table/table.component';
import { IAlmacenes } from '../../interfaces/almacenes';

@Component({
  selector: 'app-almacenes',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent
  ],
  templateUrl: './almacenes.component.html',
  styleUrl: './almacenes.component.css',
})
export class AlmacenesComponent implements OnInit {
  columnsAlmacenes: IColumns[] = columnsAlmacenes;
  dataAlmacenes: IAlmacenes[] = [];

  almacenService = inject(almacenService);
  dialog = inject(MatDialog);

  constructor(){
    effect(() => {
      this.dataAlmacenes = this.almacenService.getAlmacenesData();
      // this.almacenService.getZonas();

      // const findRolesForm = formularioUser.dataForm.find(form => form.formControl == 'rolId');
      // if(findRolesForm){
      //   findRolesForm.option = this.userService.getUserRolsData().map((roles: IRoles) => {
      //     return {
      //       label: roles.rol,
      //       value: roles.idRol
      //     }
      //   });
      // }
      console.log(this.almacenService.getAlmacenesData());
      console.log(this.almacenService.getZonaData());

    })
  }

  ngOnInit(): void {
    this.almacenService.getAlmacenes();
    this.almacenService.getZonas();
  }

  openDialog(): void {
    formularioAlmacenes.dataForm.map(form => form.value = '');

    const dialogRef = this.dialog.open(FormularioComponent, {
      panelClass: 'stylesDialog',
      data: formularioAlmacenes,
    });

    dialogRef.afterClosed().subscribe(result => {
      result.id=this.dataAlmacenes.length+1;
      this.dataAlmacenes.push(result)
    })
  }

  editDataDialog(data: any): void {
    const findNameUser = formularioAlmacenes.dataForm.find(form => form.formControl == 'nameUser');
    const findLastnameUser = formularioAlmacenes.dataForm.find(form => form.formControl == 'lastnameUser');
    const findRoles = formularioAlmacenes.dataForm.find(form => form.formControl == 'rolId');

    // if(findRoles && findNameUser && findLastnameUser){
    //   findRoles.value = data.rolId;
    //   findNameUser.value = data.nameUser;
    //   findLastnameUser.value = data.lastnameUser;
    // }

    const dialogRef = this.dialog.open(FormularioComponent, {
      data: formularioAlmacenes,
    });

    // formularioUser.dataForm.push({
    //   label: '',
    //   formControl: 'idUser',
    //   value: data.idUser,
    //   required: false,
    //   typeInput: ''
    // });

    dialogRef.afterClosed().subscribe(result => {
      result.id=this.dataAlmacenes.length+1;
          this.dataAlmacenes.push(result)
    })
  }
}

