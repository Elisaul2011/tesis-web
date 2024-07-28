import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { almacen, columnsAlmacen, dataFormAlmacen, formularioAlmacen } from './inventario.data';
import { TableComponent } from '../../components/table/table.component';
import { IColumns } from '../../interfaces/table.interface';
import { almacenService } from '../../services/almacen.service';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { MatDialog } from '@angular/material/dialog';
import { IFormulario } from '../../interfaces/fromulario.interface';
import { MatButtonModule } from '@angular/material/button';
import { IAlmacen } from '../../interfaces/almacen';

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
    columnsAlmacen: IColumns[] = columnsAlmacen;
    dataAlmacen: any[] = [];
    almacenData: IAlmacen[] = almacen;

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
      formularioAlmacen.dataForm.map(form => form.value = '');

      const dialogRef = this.dialog.open(FormularioComponent, {
        panelClass: 'stylesDialog',
        data: formularioAlmacen,
      });

      dialogRef.afterClosed().subscribe(result => {
        result.id=this.almacenData.length+1;
      this.almacenData.push(result)
      })
    }

    editDataDialog(data: any): void {
      const columnsData = this.columnsAlmacen.filter(col => col.type!='icon')

      columnsData.map(compraData => {
        const findColumns = formularioAlmacen.dataForm.find(form => form.formControl == compraData.name);
        if (findColumns){
          findColumns.value=data[compraData.name as string]
        }
      })
      formularioAlmacen.dataForm.push({
        formControl: 'id',
        label: '',
        required: false,
        typeInput: '',
        value: data.id
      })

      const dialogRef = this.dialog.open(FormularioComponent, {
        data: formularioAlmacen,
      });
      dialogRef.afterClosed().subscribe(result => {
        const findData = this.almacenData.find(com => com.id==result.id)
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
