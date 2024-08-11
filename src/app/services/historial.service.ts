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
