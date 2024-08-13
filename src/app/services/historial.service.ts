import { computed, Injectable, signal } from '@angular/core';
import { BaseService } from './base.service';
import { base_route } from '../../../enviroment';
import { IHistorial } from '../interfaces/historial';

@Injectable({
  providedIn: 'root'
})
export class HistorialService extends BaseService{
  private router_historial = `${base_route}/historial`;
  private setHistorialData = signal<IHistorial[]>([]);
  public getHistorialData = computed<IHistorial[]>(() => this.setHistorialData());

  getHistorial(): void {
    this.httpClient.get<IHistorial[]>(this.router_historial).subscribe((result: IHistorial[]) => {
      this.setHistorialData.set(result);
    })
  }

  getHistoryExcelFile(): void {
    this.httpClient.get(`${this.router_historial}/imprimir`, { responseType: 'blob' }).subscribe((result) => {

      if(result.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
        const url = window.URL.createObjectURL(result);
        const link = document.createElement('a');
        link.href = url;
        link.download = `nombre-historial.xlsx`;
        link.click();
      }
    })
  }

  postReport(bodyReport: any): void {
    this.httpClient.post(this.router_historial, bodyReport).subscribe(result => {
      if (result) {
        this.getHistorial();
      }
    })
  }

  putReport(bodyReport: any): void {
    this.httpClient.put(this.router_historial, bodyReport).subscribe(result => {
      if (result) {
        this.getHistorial();
      }
    })
  }

}
