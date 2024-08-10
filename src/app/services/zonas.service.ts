import { computed, Injectable, signal } from '@angular/core';
import { IZona } from '../interfaces/inventario';
import { HttpClient } from '@angular/common/http';
import { base_route } from '../../../enviroment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ZonasService extends BaseService  {
  private base_router = `${base_route}/zona`;
  private setZonaData = signal<IZona[]>([]);
  public getZonaData = computed<IZona[]>(() => this.setZonaData());

  // constructor(private httpClient: HttpClient) { }

  getZonas(): void {
    this.httpClient.get<IZona[]>(this.base_router).subscribe((result: IZona[])  => {
      this.setZonaData.set(result);
    })
  }

  getZonasByAlmacen(almacenId: string): void {
    this.httpClient.get<IZona[]>(`${this.base_router}/${almacenId}`).subscribe((result: IZona[])  => {
      this.setZonaData.set(result);
    })
  }

}
