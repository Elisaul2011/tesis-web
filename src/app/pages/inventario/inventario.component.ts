import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import {
  columnsInventario,
  dataFormAlmacen,
  formularioInventario,
} from './inventario.data';
import { TableComponent } from '../../components/table/table.component';
import { IColumns, ISendDataTable } from '../../interfaces/table.interface';

import { FormularioComponent } from '../../components/formulario/formulario.component';
import { MatDialog } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { IInventario } from '../../interfaces/inventario';
import { InventarioService } from '../../services/inventario.service';
import { almacenService } from '../../services/almacen.service';

@Component({
  selector: 'app-almacen',
  standalone: true,
  imports: [CommonModule, TableComponent, MatButtonModule],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css',
})
export class InventarioComponent {
  columnsInventario: IColumns<IInventario>[] = columnsInventario;
  dataInvenario: IInventario[] = [];
  inventarioData: IInventario[] = [];

  almacenService = inject(almacenService);
  inventarioService = inject(InventarioService);
  dialog = inject(MatDialog);
  compraData: any;

  constructor() {
    effect(() => {
      this.inventarioData = this.inventarioService.getInventarioData();
    });
  }

  ngOnInit(): void {
    this.almacenService.getAlmacenes();
    this.inventarioService.getInventario();
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
    formularioInventario.dataForm.map((form) => (form.value = ''));

    const dialogRef = this.dialog.open(FormularioComponent, {
      panelClass: 'stylesDialog',
      data: formularioInventario,
    });

    dialogRef.afterClosed().subscribe((result) => {
      result.id = this.dataInvenario.length + 1;
      this.dataInvenario.push(result);
    });
  }

  editDataDialog(data: any): void {
    const columnsData = this.columnsInventario.filter(
      (col) => col.type != 'icon'
    );

    columnsData.map((compraData) => {
      const findColumns = formularioInventario.dataForm.find(
        (form) => form.formControl == compraData.name
      );
      if (findColumns) {
        findColumns.value = data[compraData.name as string];
      }
    });
    formularioInventario.dataForm.push({
      formControl: 'id',
      label: '',
      required: false,
      typeInput: '',
      value: data.id,
    });

    // const dialogRef = this.dialog.open(FormularioComponent, {
    //   data: formularioInventario,
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   const findData = this.dataInvenario.find(com => com.id==result.id)
    //   if (findData){
    //     findData.ubicacion=result.ubicacion
    //     findData.zona=result.zona
    //     findData.pn=result.pn
    //     findData.descripción=result.descripción
    //     findData.tipo=result.tipo
    //     findData.sn=result.sn
    //     findData.cantidad=result.cantidad
    //     findData.lote=result.lote
    //     findData.estado=result.estado
    //     findData.sl=result.sl
    //     findData.order=result.order
    //   }
    // })
  }
}
