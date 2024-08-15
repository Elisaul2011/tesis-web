import { CommonModule } from '@angular/common';
import { Component, OnInit, effect, inject } from '@angular/core';
import { IColumns, IConfigTable, ISendDataTable } from '../../interfaces/table.interface';
import { columnsHistorial } from './historial.data';
import { TableComponent } from '../../components/table/table.component';
import { UsersService } from '../../services/users.service';
import { IRoles, IUsers } from '../../interfaces/users';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { IHistorial } from '../../interfaces/historial';
import Swal from 'sweetalert2';
import { IInventario } from '../../interfaces/inventario';
import { formularioInventario } from '../inventario/inventario.data';
import { HistorialService } from '../../services/historial.service';
@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    MatButtonModule
  ],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css',
})
export class HistorialComponent {
  columnsHistorial: IColumns<IHistorial>[] = columnsHistorial;
  dataHistorial: IHistorial[] = [];
  historialConfigTable: IConfigTable={btnAdd: false}
  historialService = inject(HistorialService);
  dialog = inject(MatDialog);

  constructor(){
    effect(() => {
      this.dataHistorial = this.historialService.getHistorialData();

    })
  }

  ngOnInit(): void {
    this.historialService.getHistorial();
  }

  downloadHistoryFile(): void {
    this.historialService.getHistoryExcelFile();
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
        // this.historialConfigTable.deleteInventario(data.idInventario);
      }
    });
  }
}
