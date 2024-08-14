import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import {
  columnsInventario,
  dataFormAlmacen,
  formularioAsignar,
  formularioInventario,
} from './inventario.data';
import { TableComponent } from '../../components/table/table.component';
import { IColumns, ISendDataTable } from '../../interfaces/table.interface';

import { FormularioComponent } from '../../components/formulario/formulario.component';
import { MatDialog } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { BodyInventario, IAtas, IInventario, ITipocomponente } from '../../interfaces/inventario';
import { InventarioService } from '../../services/inventario.service';
import { almacenService } from '../../services/almacen.service';
import { ZonasService } from '../../services/zonas.service';
import { IAlmacenes } from '../../interfaces/almacenes';
import { AtasService } from '../../services/atas.service';
import { TiposComponentesService } from '../../services/tiposComponentes.service';
import Swal from 'sweetalert2';
import { UsersService } from '../../services/users.service';
import { IUsers } from '../../interfaces/users';
import { CompraService } from '../../services/compra.service';
import { ICompra } from '../../interfaces/compra';

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
  userService = inject(UsersService);
  inventarioService = inject(InventarioService);
  compraService = inject(CompraService);
  atasService = inject(AtasService);
  tiposComponentesService = inject(TiposComponentesService);
  dialog = inject(MatDialog);
  compraData: any;

  constructor() {
    effect(() => {
      this.inventarioData = this.inventarioService.getInventarioData();
      const ordenCompraForm = formularioInventario.dataForm.find(form => form.formControl == 'orderCompraId');
      if (ordenCompraForm) {
        ordenCompraForm.option = this.compraService.getCompraData().map((com: ICompra) => {
          return {
            label: com.ordenCompra,
            value: com.idOrdenCompra,
            data: com
          }
        });
      }

      const userTecnicForm = formularioAsignar.dataForm.find(form => form.formControl == 'asignTo');
      if (userTecnicForm) {
        userTecnicForm.option = this.userService.getUserData().map((user: IUsers) => {
          return {
            label: `${user.nameUser} ${user.lastnameUser}`,
            value: user.idUser
          }
        });
      }

      const inventoriesForm = formularioAsignar.dataForm.find(form => form.formControl == 'idInventario');
      if (inventoriesForm) {
        inventoriesForm.option = this.inventarioService.getInventarioServiblesData().map((inv: IInventario) => {
          return {
            label: inv.descripcion,
            value: inv.idInventario
          }
        });
      }

      const findAlmacen = formularioInventario.dataForm.find(form => form.formControl == 'almacenesId');
      if (findAlmacen) {
        findAlmacen.option = this.almacenService.getAlmacenesData().map((almacen: IAlmacenes) => {
          return {
            label: almacen.nombre,
            value: almacen.idAlmacenes
          }
        });
      }

      const findAtas = formularioInventario.dataForm.find(form => form.formControl == 'ataId');
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
    this.compraService.getCompra();
    this.almacenService.getAlmacenes();
    this.inventarioService.getInventario();
    this.userService.getUsersByRol('3');
    this.inventarioService.getInventarioServibles();
    this.atasService.getAtas();
    this.tiposComponentesService.getTiposComponentes();
  }

  downloadFileExcel():void {
    this.inventarioService.getInventarioExcelFile();
  }

  defectColumnAction(dataComponent: ISendDataTable): void {
    if (dataComponent.action == 'add') {
      this.openDialog();
    }
    if (dataComponent.action == 'edit') {
      this.editDataDialog(dataComponent.data);
    }
  }

  openDialogAsign(): void {
    formularioInventario.dataForm.map((form) => (form.value = ''));
    const dialogRef = this.dialog.open(FormularioComponent, {
      panelClass: 'stylesDialog',
      data: formularioAsignar,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      this.inventarioService.postInventarioAsign(result)
    });
  }

  openDialog(): void {
    formularioInventario.dataForm.map((form) => (form.value = ''));
    const dialogRef = this.dialog.open(FormularioComponent, {
      panelClass: 'stylesDialog',
      data: formularioInventario,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.inventarioService.postInventario(result);
    });
  }

  editDataDialog(data: IInventario): void {
    formularioInventario.dataForm.map(form => {
      const findByName = formularioInventario.dataForm.find(loquesea => loquesea.formControl == form.formControl);
      if(findByName){
        findByName.value = data[form.formControl as keyof IInventario]
      }
    })

    const dialogRef = this.dialog.open(FormularioComponent, {
      data: formularioInventario,
      panelClass: 'stylesDialog',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      result.idInventario  = data.idInventario;
      this.inventarioService.putInventario(result);
    })
  }
}
