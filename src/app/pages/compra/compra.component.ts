import { CommonModule } from '@angular/common';
import { Component, effect, inject, OnInit } from '@angular/core';
import { CompraService } from '../../services/compra.service';
import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { columnsCompra,formularioCompra } from './compra.data';
import { IColumns, ISendDataTable } from '../../interfaces/table.interface';
import { TableComponent } from '../../components/table/table.component';
import { MatButtonModule } from '@angular/material/button';
import { BodyCreateCompra, BodyUpdateCompra, ICompra } from '../../interfaces/compra';
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
    })
  }

  ngOnInit(): void {
    this.compraService.getCompra();
  }

  defectColumnAction(dataComponent: ISendDataTable): void {
    if (dataComponent.action == 'add') {
      this.openDialog();
    }
    if (dataComponent.action == 'edit') {
      this.editDataDialog(dataComponent.data);
    }
    if (dataComponent.action == 'delete') {
      this.deleteData(dataComponent.data);
    }
  }

  openDialog(): void {
    formularioCompra.dataForm.map((form) => (form.value = ''));
    const dialogRef = this.dialog.open(FormularioComponent, {
      panelClass: 'stylesDialog',
      data: formularioCompra,
    });
    dialogRef.afterClosed().subscribe((result: BodyCreateCompra) => {
      this.compraService.postCompra(result);
    });
  }

  editDataDialog(data: ICompra): void {
    console.log(data);
    
    formularioCompra.dataForm.map(form => {
      const findByName = formularioCompra.dataForm.find(loquesea => loquesea.formControl == form.formControl);
      if (findByName) {
        findByName.value = data[form.formControl as keyof ICompra]
      }
    })

    const dialogRef = this.dialog.open(FormularioComponent, {
      data: formularioCompra,
      panelClass: 'stylesDialog',
    });
    dialogRef.afterClosed().subscribe((result: BodyUpdateCompra) => {
      result.idOrdenCompra = data.idOrdenCompra;
      this.compraService.putCompra(result);
    })
  }

  deleteData(data: ICompra): void {
    Swal.fire({
      title: "Seguro que quieres eliminar la orden de compra?",
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
