import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { MatDialog } from '@angular/material/dialog';
import { IColumns, IConfigTable, ISendDataTable } from '../../interfaces/table.interface';
import { columnsInspeccion, configTableInspeccion, formularioInspeccion } from './inspeccion.data';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { MatButtonModule } from '@angular/material/button';
import { IInspeccion } from '../../interfaces/inspeccion';
import { inspeccionService } from '../../services/inspeccion.service';
import Swal from 'sweetalert2';
import { UsersService } from '../../services/users.service';
import { IOptions } from '../../interfaces/fromulario.interface';
import { IInventario } from '../../interfaces/inventario';



@Component({
  selector: 'app-inspeccion',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    MatButtonModule
  ],
  templateUrl: './inspeccion.component.html',
  styleUrl: './inspeccion.component.css',
})
export class InspeccionComponent {
  columnsInspeccion: IColumns<IInventario>[] = columnsInspeccion;
  dataInspeccion: IInspeccion[] = [];
  configTableInspeccion: IConfigTable = configTableInspeccion;

  inspeccionService = inject(inspeccionService);
  userService = inject(UsersService);
  dialog = inject(MatDialog);

  constructor(){
    effect(() => {
      this.dataInspeccion = this.inspeccionService.getInspeccionData();

      const findInspect = formularioInspeccion.dataForm.find(form => form.formControl == 'inspectecBy');
      if(findInspect){
        findInspect.option = this.userService.getUserData().map(user => {
          return {
            label: `${user.nameUser} ${user.lastnameUser}`,
            value: user.idUser
          }
        })
      }
    })
  }

  ngOnInit(): void {
    this.inspeccionService.getInspeccion();
    this.userService.getUsersByRol('2');
  }

  defectColumnAction(dataComponent: ISendDataTable): void {
    // if (dataComponent.action == 'add') {
    //   this.openDialog();
    // }
    if (dataComponent.action == 'edit') {
      this.editDataDialog(dataComponent.data);
    }
    // if (dataComponent.action == 'delete') {
    //   this.deleteData(dataComponent.data);
    // }
  }

  // openDialog(): void {
  //   formularioInspeccion.dataForm.map((form) => (form.value = ''));
  //   const dialogRef = this.dialog.open(FormularioComponent, {
  //     panelClass: 'stylesDialog',
  //     data: formularioInspeccion,
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //   });
  // }

  editDataDialog(data: IInventario): void {
    const dialogRef = this.dialog.open(FormularioComponent, {
      data: formularioInspeccion,
      panelClass: 'stylesDialog',
    });
    dialogRef.afterClosed().subscribe(result => {
      result.idInventario = data.idInventario;
      this.inspeccionService.putInspeccion(result);
    })
  }

  // deleteData(data: IInspeccion): void {
  //   Swal.fire({
  //     title: "Seguro que quieres eliminar el componente del inventario?",
  //     showDenyButton: true,
  //     confirmButtonColor: "#3085d6",
  //     denyButtonText: `Cancelar`,
  //     confirmButtonText: "Confirmar",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.inspeccionService.deleteInspeccion(data.idInspeccion);
  //     }
  //   });
  // }
}
