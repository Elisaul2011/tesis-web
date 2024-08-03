import { CommonModule } from '@angular/common';
import { Component, effect, inject, OnInit } from '@angular/core';
import { CompraService } from '../../services/compra.service';
import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { columnsCompra, compras, formularioCompra } from './compra.data';
import { IColumns, ISendDataTable } from '../../interfaces/table.interface';

import { TableComponent } from '../../components/table/table.component';
import { MatButtonModule } from '@angular/material/button';
import { ICompra } from '../../interfaces/compra';
import Swal from 'sweetalert2';

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
  columnsCompra: IColumns<ICompra>[] = columnsCompra;

  compraData: ICompra[] = [];
  compraService = inject(CompraService);
  dialog = inject(MatDialog);

  constructor(){
    effect(() => {
      this.compraData = this.compraService.getCompraData();
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
    this.compraService.getCompra();
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
    const columnsData = this.columnsCompra.filter(col => col.type!='icon')

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
      // const findData = this.compraData.find(com => com.id==result.id)

      // if (findData){

      //   findData.descripcion=result.descripcion
      //   findData.cantidad=result.cantidad
      //   findData.pn=result.pn
      // }
    })
  }

  deleteData(data: ICompra): void {
    Swal.fire({
      title: "¿Seguro que quieres eliminar La Orden de Compra?",
      showDenyButton: true,
      confirmButtonColor: "#3085d6",
      denyButtonText: `Cancelar`,
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.compraService.deleteCompra(data.idOrdenCompra);
      }
    });
  }

}
