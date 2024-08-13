import { computed, Injectable, signal } from '@angular/core';
import { BaseService } from './base.service';
import { base_route } from '../../../enviroment';
import { IInventario } from '../interfaces/inventario';

@Injectable({
  providedIn: 'root'
})
export class ReportSlService extends BaseService{
  private route_report = `${base_route}/reporte-sl`;
  private setReportData = signal<IInventario[]>([]);
  public getReportData = computed<IInventario[]>(() => this.setReportData());

  getReportSL(): void {
    this.httpClient.get<IInventario[]>(this.route_report).subscribe((result: IInventario[]) => {
      this.setReportData.set(result);
    })
  }

  
  getReportSLExcelFile(): void {
    this.httpClient.get(`${this.route_report}/imprimir`, { responseType: 'blob' }).subscribe((result) => {

      if(result.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
        const url = window.URL.createObjectURL(result);
        const link = document.createElement('a');
        link.href = url;
        link.download = `nombre-reporte.xlsx`;
        link.click();
      }
    })
  }
}
