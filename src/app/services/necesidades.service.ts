import { computed, Injectable, signal } from '@angular/core';
import { BaseService } from './base.service';
import { base_route } from '../../../enviroment';
import { INecesidades } from '../interfaces/necesidades';
// import { INecesidades } from '../interfaces/Necesidades';

@Injectable({
  providedIn: 'root'
})
export class NecesidadesService extends BaseService{
  private router_necesidades = `${base_route}/necesidades-tecnicas`;
  private setNecesidadesData = signal<INecesidades[]>([]);
  public getNecesidadesData = computed<INecesidades[]>(() => this.setNecesidadesData());

  getNecesidades(): void {
    this.httpClient.get<INecesidades[]>(this.router_necesidades).subscribe((result: INecesidades[]) => {
      this.setNecesidadesData.set(result);
    })
  }

  postNecesidades(bodyReport: any): void {
    this.httpClient.post(this.router_necesidades, bodyReport).subscribe(result => {
      if (result) {
        this.getNecesidades();
      }
    })
  }

  putNecesidades(bodyReport: any): void {
    this.httpClient.put(this.router_necesidades, bodyReport).subscribe(result => {
      if (result) {
        this.getNecesidades();
      }
    })
  }

}
