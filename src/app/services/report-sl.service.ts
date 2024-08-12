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
}
