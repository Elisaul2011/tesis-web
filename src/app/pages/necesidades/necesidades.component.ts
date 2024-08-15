import { CommonModule } from '@angular/common';
import { Component, effect, inject, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { columnsNecesidades, formularioAsignar, formularioNecesidades } from './necesidades.data';
import { IColumns, ISendDataTable } from '../../interfaces/table.interface';

import { TableComponent } from '../../components/table/table.component';
import { NecesidadesService } from '../../services/necesidades.service';
import { BodyNecesidades, BodyUpdateNecesidades, INecesidades } from '../../interfaces/necesidades';
import { UsersService } from '../../services/users.service';
import { InventarioService } from '../../services/inventario.service';
import { MatButtonModule } from '@angular/material/button';
import { IUsers } from '../../interfaces/users';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-necesidades',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    MatButtonModule
  ],
  templateUrl: './necesidades.component.html',
  styleUrl: './necesidades.component.css',
})
export class NecesidadesComponent extends BaseComponent {
  columnsNecesidades: IColumns<INecesidades>[] = columnsNecesidades;
  dataNecesidades: INecesidades[] = [];

  inventarioServices = inject(InventarioService);
  necesidadesService = inject(NecesidadesService);

  constructor() {
    super();
    effect(() => {
      this.dataNecesidades = this.necesidadesService.getNecesidadesData();

      const findInspect = formularioNecesidades.dataForm.find(form => form.formControl == 'inventarioId');
      if(findInspect){
        findInspect.option = this.inventarioServices.getInventarioServiblesData().map(inv => {
          return {
            label: inv.descripcion,
            value: inv.idInventario,
            data: inv
          }
        })
      }

      const userTecnicForm = formularioAsignar.dataForm.find(form => form.formControl == 'sendTo');
      if (userTecnicForm) {
        userTecnicForm.option = this.userService.getUserData().map((user: IUsers) => {
          return {
            label: `${user.nameUser} ${user.lastnameUser}`,
            value: user.idUser
          }
        });
      }
    })
  }

  ngOnInit(): void {
    this.necesidadesService.getNecesidades();
    this.inventarioServices.getInventarioServibles();
    this.userService.getUsersByRol('2');
  }

  openDialogAsign(): void {
    const dialogRef = this.dialog.open(FormularioComponent, {
      panelClass: 'stylesDialog',
      data: formularioAsignar,
    });
    dialogRef.afterClosed().subscribe((result) => {
      // result.userId = this.userToken.idUser;
      console.log(result);
      result.sendBy = this.userToken.idUser;
      this.necesidadesService.putNecesidades(result)
    });
  }

  defectColumnAction(dataComponent: ISendDataTable): void {
    if (dataComponent.action == 'add') {
      this.openDialog();
    }
    if (dataComponent.action == 'edit') {
      this.editDataDialog(dataComponent.data);
    }
  }

  openDialog(): void {
    formularioNecesidades.dataForm.map(form => form.value = '');

    const dialogRef = this.dialog.open(FormularioComponent, {
      panelClass: 'stylesDialog',
      data: formularioNecesidades,
    });

    dialogRef.afterClosed().subscribe((result: BodyNecesidades) => {
      this.necesidadesService.postNecesidades(result)
    })
  }

  editDataDialog(data: INecesidades): void {
    formularioNecesidades.dataForm.map(form => {
      const findByName = formularioNecesidades.dataForm.find(loquesea => loquesea.formControl == form.formControl);
      if (findByName) {
        findByName.value = data[form.formControl as keyof INecesidades]
      }
    })

    const dialogRef = this.dialog.open(FormularioComponent, {
      data: formularioNecesidades,
    });

    dialogRef.afterClosed().subscribe((result: BodyUpdateNecesidades) => {
      if (result) {
        result.sendBy = this.userToken.idUser;
        this.necesidadesService.putNecesidades(result);
      }
    })
  }
}
