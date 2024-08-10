import { CommonModule } from '@angular/common';
import { Component, effect, inject, OnInit } from '@angular/core';
import { almacenService } from '../../services/almacen.service';
import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { columnsAlmacenes, formularioAlmacenes } from './almacenes.data';
import { IColumns, ISendDataTable } from '../../interfaces/table.interface';

import { TableComponent } from '../../components/table/table.component';
import { BodyCreateAlmacen, BodyUpdateAlmacen, IAlmacenes } from '../../interfaces/almacenes';
import { IOptions } from '../../interfaces/fromulario.interface';
import Swal from 'sweetalert2'

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
  columnsAlmacenes: IColumns<IAlmacenes>[] = columnsAlmacenes;
  dataAlmacenes: IAlmacenes[] = [];

  almacenService = inject(almacenService);
  dialog = inject(MatDialog);

  constructor(){
    effect(() => {
      this.dataAlmacenes = this.almacenService.getAlmacenesData();
    })
  }

  ngOnInit(): void {
    this.almacenService.getAlmacenes();
  }

  defectColumnAction(dataComponent: ISendDataTable): void {
    if(dataComponent.action == 'add'){
      this.openDialog();
    }
    if(dataComponent.action == 'edit'){
      this.editDataDialog(dataComponent.data);
    }
    if(dataComponent.action == 'delete'){
      this.deleteData(dataComponent.data);
    }
  }

  openDialog(): void {
    formularioAlmacenes.dataForm.map(form => form.value = '');

    const dialogRef = this.dialog.open(FormularioComponent, {
      data: formularioAlmacenes,
    });

    dialogRef.afterClosed().subscribe((result:BodyCreateAlmacen ) => {
      if(result){
        this.almacenService.postAlmacenes(result)
      }
    })
  }

  editDataDialog(data: IAlmacenes): void {
    formularioAlmacenes.dataForm.map(form => {
      const findByName = formularioAlmacenes.dataForm.find(loquesea => loquesea.formControl == form.formControl);
      if(findByName){
        findByName.value = data[form.formControl as keyof IAlmacenes]
      }
    })

    const dialogRef = this.dialog.open(FormularioComponent, {
      data: formularioAlmacenes,
    });

    dialogRef.afterClosed().subscribe((result: BodyUpdateAlmacen) => {
      if(result){
        result.idAlmacenes = data.idAlmacenes;
        this.almacenService.putAlmacenes(result)
      }
    })
  }

  deleteData(data: IAlmacenes): void {
    Swal.fire({
      title: "Seguro que quieres eliminar el almacen?",
      showDenyButton: true,
      confirmButtonColor: "#3085d6",
      denyButtonText: `Cancelar`,
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.almacenService.deleteAlmacenes(data.idAlmacenes);
      }
    });
  }
}
