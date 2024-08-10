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

  columnsShelfLife: IColumns<IShelfLife>[] = columnsShelfLife;
  dataSL: IShelfLife[] = [];
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

  defectColumnAction(dataComponent: ISendDataTable): void {
    if(dataComponent.action == 'add'){
      this.openDialog();
    }
    if(dataComponent.action == 'edit'){
      this.editDataDialog(dataComponent.data);
    }
  }

  openDialog(): void {
    formularioShelfLife.dataForm.map(form => form.value = '');

    const dialogRef = this.dialog.open(FormularioComponent, {
      panelClass: 'stylesDialog',
      data: formularioShelfLife,
    });

    dialogRef.afterClosed().subscribe((result:BodyCreateTaller ) => {
      this.reportSLService.postReport(result)
    })
  }

  editDataDialog(data: ITaller): void {
    formularioShelfLife.dataForm.map(form => {
      const findByName = formularioShelfLife.dataForm.find(loquesea => loquesea.formControl == form.formControl);
      if(findByName){
        findByName.value = data[form.formControl as keyof ITaller]
      }
    })

    const dialogRef = this.dialog.open(FormularioComponent, {
      data: formularioShelfLife,
    });

    dialogRef.afterClosed().subscribe((result: BodyUpdateTaller) => {
      if(result){
        result.idTaller = data.idTaller;
        this.reportSLService.putReport(result)
      }
    })
  }

}
