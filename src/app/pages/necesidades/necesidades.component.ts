import { CommonModule } from '@angular/common';
import { Component, effect, inject, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { columnsNecesidades, formularioNecesidades } from './necesidades.data';
import { IColumns, ISendDataTable } from '../../interfaces/table.interface';

import { TableComponent } from '../../components/table/table.component';
import { NecesidadesService } from '../../services/necesidades.service';
import { BodyNecesidades, BodyUpdateNecesidades, INecesidades } from '../../interfaces/necesidades';
import { UsersService } from '../../services/users.service';
import { InventarioService } from '../../services/inventario.service';

@Component({
  selector: 'app-necesidades',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent
  ],
  templateUrl: './necesidades.component.html',
  styleUrl: './necesidades.component.css',
})
export class NecesidadesComponent {
  columnsNecesidades: IColumns<INecesidades>[] = columnsNecesidades;
  dataNecesidades: INecesidades[] = [];

  inventarioServices = inject(InventarioService);
  necesidadesService = inject(NecesidadesService);
  dialog = inject(MatDialog);

  constructor() {
    effect(() => {
      this.dataNecesidades = this.necesidadesService.getNecesidadesData();

      const findInspect = formularioNecesidades.dataForm.find(form => form.formControl == 'inventarioId');
      if(findInspect){
        findInspect.option = this.inventarioServices.getInventarioServiblesData().map(inv => {
          return {
            label: `${inv.descripcion} - ${inv.order}`,
            value: inv.idInventario,
            data: inv
          }
        })
      }
    })
  }

  ngOnInit(): void {
    this.necesidadesService.getNecesidades();
    this.inventarioServices.getInventarioServibles();
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
        result.idNecesidadesTecnicas = data.idNecesidadesTecnicas;
        this.necesidadesService.putNecesidades(result)
      }
    })
  }
}
