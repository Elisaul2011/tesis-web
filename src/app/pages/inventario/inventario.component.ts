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
import { IAtas, IInventario, ITipocomponente } from '../../interfaces/inventario';
import { InventarioService } from '../../services/inventario.service';
import { almacenService } from '../../services/almacen.service';
import { ZonasService } from '../../services/zonas.service';
import { IAlmacenes } from '../../interfaces/almacenes';
import { AtasService } from '../../services/atas.service';
import { TiposComponentesService } from '../../services/tiposComponentes.service';
import Swal from 'sweetalert2';

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
  zonaService = inject(ZonasService);
  inventarioService = inject(InventarioService);
  atasService = inject(AtasService);
  tiposComponentesService = inject(TiposComponentesService);
  dialog = inject(MatDialog);
  compraData: any;

  constructor() {
    effect(() => {
      this.inventarioData = this.inventarioService.getInventarioData();
      const findAlmacen = formularioInventario.dataForm.find(form => form.formControl == 'almacenesId');
      if (findAlmacen) {
        findAlmacen.option = this.almacenService.getAlmacenesData().map((almacen: IAlmacenes) => {
          return {
            label: almacen.nombre,
            value: almacen.idAlmacenes
          }
        });
      }

      const findAtas = formularioInventario.dataForm.find(form => form.formControl == 'atas');
      if (findAtas) {
        findAtas.option = this.atasService.getAtaData().map((atas: IAtas) => {
          return {
            label: `${atas.CodigoAta} - ${atas.NombreATA}`,
            value: atas.IdAta
          }
        });
      }

      const findTipos = formularioInventario.dataForm.find(form => form.formControl == 'tipoComponenteId');
      if (findTipos) {
        findTipos.option = this.tiposComponentesService.getTiposComponentesData().map((tipos: ITipocomponente) => {
          return {
            label: tipos.tipoComponente,
            value: tipos.idTipoComponente
          }
        });
      }
    });
  }

  ngOnInit(): void {
    this.almacenService.getAlmacenes();
    this.inventarioService.getInventario();
    this.atasService.getAtas();
    this.tiposComponentesService.getTiposComponentes();
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
    formularioInventario.dataForm.map((form) => (form.value = ''));
    const dialogRef = this.dialog.open(FormularioComponent, {
      panelClass: 'stylesDialog',
      data: formularioInventario,
    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }

  editDataDialog(data: IInventario): void {
    console.log(data);
    const dialogRef = this.dialog.open(FormularioComponent, {
      data: formularioInventario,
      panelClass: 'stylesDialog',
    });
    dialogRef.afterClosed().subscribe(result => {
    })
  }

  deleteData(data: IInventario): void {
    Swal.fire({
      title: "Seguro que quieres eliminar el componente del inventario?",
      showDenyButton: true,
      confirmButtonColor: "#3085d6",
      denyButtonText: `Cancelar`,
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.inventarioService.deleteInventario(data.idInventario);
      }
    });
  }
}
