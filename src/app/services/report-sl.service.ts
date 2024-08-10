import { computed, Injectable, signal } from '@angular/core';
import { BaseService } from './base.service';
import { base_route } from '../../../enviroment';
import { IShelfLife } from '../interfaces/shelfLife';

@Injectable({
  providedIn: 'root'
})
export class ReportSlService extends BaseService{
  private route_report = `${base_route}/reporte-sl`;
  private setReportData = signal<IShelfLife[]>([]);
  public getReportData = computed<IShelfLife[]>(() => this.setReportData());

  getReportSL(): void {
    this.httpClient.get<IShelfLife[]>(this.route_report).subscribe((result: IShelfLife[]) => {
      this.setReportData.set(result);
    })
  }

  postReport(bodyReport: any): void {
    this.httpClient.post(this.route_report, bodyReport).subscribe(result => {
      if (result) {
        this.getReportSL();
      }
    })
  }

  putReport(bodyReport: any): void {
    this.httpClient.put(this.route_report, bodyReport).subscribe(result => {
      if (result) {
        this.getReportSL();
      }
    })
  }

}
