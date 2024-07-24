import { CommonModule } from '@angular/common';
import { Component, effect, inject, OnInit } from '@angular/core';
import { almacenService } from '../../services/almacen.service';
import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { columnsCompra, compras, formularioCompra } from './compra.data';
import { IColumns } from '../../interfaces/table.interface';

import { TableComponent } from '../../components/table/table.component';
import { MatButtonModule } from '@angular/material/button';
import { ICompra } from '../../interfaces/compra';

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    MatButtonModule
  ],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css',
})
export class CompraComponent {
  columnsAlmacenes: IColumns[] = columnsCompra;

  compraData: ICompra[] = compras;
  almacenService = inject(almacenService);
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
    this.almacenService.getAlmacenes();
  }

  openDialog(): void {
    formularioCompra.dataForm.map(form => form.value = '');

    const dialogRef = this.dialog.open(FormularioComponent, {
      data: formularioCompra,
    });

    dialogRef.afterClosed().subscribe(result => {
      result.id=this.compraData.length+1;
      this.compraData.push(result)
    })
  }

  editDataDialog(data: any): void {
    const columnsData = this.columnsAlmacenes.filter(col => col.type!='icon')

    columnsData.map(compraData => {
      const findColumns = formularioCompra.dataForm.find(form => form.formControl == compraData.name);
      if (findColumns){
        findColumns.value=data[compraData.name as string]
      }
    })
    formularioCompra.dataForm.push({
      formControl: 'id',
      label: '',
      required: false,
      typeInput: '',
      value: data.id
    })

    const dialogRef = this.dialog.open(FormularioComponent, {
      data: formularioCompra,
    });


    dialogRef.afterClosed().subscribe(result => {
      const findData = this.compraData.find(com => com.id==result.id)

      if (findData){
        findData.item=result.item
        findData.descripcion=result.descripcion
        findData.cantidad=result.cantidad
        findData.pn=result.pn
      }
    })
  }
}
