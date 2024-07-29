import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { columnsInventario, dataFormAlmacen, formularioInventario, inventario } from './inventario.data';
import { TableComponent } from '../../components/table/table.component';
import { IColumns } from '../../interfaces/table.interface';

import { FormularioComponent } from '../../components/formulario/formulario.component';
import { MatDialog } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import {  IInventario } from '../../interfaces/inventario';

@Component({
  selector: 'app-almacen',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    MatButtonModule
  ],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css',
})
export class InventarioComponent {
    columnsInventario: IColumns[] = columnsInventario;
    dataInvenario: any[] = [];
    inventarioData: IInventario[] = inventario;

    // almacenService = inject(almacenService);
    dialog = inject(MatDialog);
  compraData: any;

    constructor(){
      effect(() => {
        // this.dataAlmacen = this.almacenService.getUserData();
      })
    }

    ngOnInit(): void {
      // this.almacenService.getUsers();

    }

    openDialog(): void {
      formularioInventario.dataForm.map(form => form.value = '');

      const dialogRef = this.dialog.open(FormularioComponent, {
        panelClass: 'stylesDialog',
        data: formularioInventario,
      });

      dialogRef.afterClosed().subscribe(result => {
        result.id=this.dataInvenario.length+1;
      this.dataInvenario.push(result)
      })
    }

    editDataDialog(data: any): void {
      const columnsData = this.columnsInventario.filter(col => col.type!='icon')

      columnsData.map(compraData => {
        const findColumns = formularioInventario.dataForm.find(form => form.formControl == compraData.name);
        if (findColumns){
          findColumns.value=data[compraData.name as string]
        }
      })
      formularioInventario.dataForm.push({
        formControl: 'id',
        label: '',
        required: false,
        typeInput: '',
        value: data.id
      })

      const dialogRef = this.dialog.open(FormularioComponent, {
        data: formularioInventario,
      });
      dialogRef.afterClosed().subscribe(result => {
        const findData = this.dataInvenario.find(com => com.id==result.id)
        if (findData){
          findData.ubicacion=result.ubicacion
          findData.zona=result.zona
          findData.pn=result.pn
          findData.descripción=result.descripción
          findData.tipo=result.tipo
          findData.sn=result.sn
          findData.cantidad=result.cantidad
          findData.lote=result.lote
          findData.estado=result.estado
          findData.sl=result.sl
          findData.order=result.order
        }
      })


    }

}
