import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { IColumns, IConfigTable, ISendDataTable } from '../../interfaces/table.interface';
import { columnsShelfLife, formularioShelfLife } from './shelfLife.data';
import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { TableComponent } from "../../components/table/table.component";
import { MatButtonModule } from '@angular/material/button';
import { ReportSlService } from '../../services/report-sl.service';
import { BodyCreateTaller, ITaller, BodyUpdateTaller } from '../../interfaces/taller';
import { IShelfLife } from '../../interfaces/shelfLife';
import { IInventario } from '../../interfaces/inventario';

@Component({
  selector: 'app-shelf-life',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    MatButtonModule
],
  templateUrl: './shelfLife.component.html',
  styleUrl: './shelfLife.component.css',
})
export class ShelfLifeComponent {

  columnsShelfLife: IColumns<IInventario>[] = columnsShelfLife;
  dataSL: IInventario[] = [];
  SLConfigTable: IConfigTable={btnAdd: false}
  reportSLService = inject(ReportSlService)

  dialog = inject(MatDialog);

  constructor(){
    effect(() => {
      this.dataSL = this.reportSLService.getReportData();
    })
  }

  ngOnInit(): void {
    this.reportSLService.getReportSL();
  }
}
