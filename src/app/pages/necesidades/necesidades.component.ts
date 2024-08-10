import { CommonModule } from '@angular/common';
import { Component, effect, inject, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { columnsNecesidades, formularioNecesidades } from './necesidades.data';
import { IColumns, ISendDataTable } from '../../interfaces/table.interface';

import { TableComponent } from '../../components/table/table.component';
import { NecesidadesService } from '../../services/necesidades.service';
import { INecesidades } from '../../interfaces/necesidades';

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

  necesidadesService = inject(NecesidadesService);
  dialog = inject(MatDialog);

  constructor() {
    effect(() => {
      this.dataNecesidades = this.necesidadesService.getNecesidadesData();
    })
  }

  ngOnInit(): void {
    this.necesidadesService.getNecesidades();
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

    dialogRef.afterClosed().subscribe((result: INecesidades) => {
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

    dialogRef.afterClosed().subscribe((result: INecesidades) => {
      if (result) {
        result.idNecesidadesTecnicas = data.idNecesidadesTecnicas;
        this.necesidadesService.putNecesidades(result)
      }
    })
  }
}
