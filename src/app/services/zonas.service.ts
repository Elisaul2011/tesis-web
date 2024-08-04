import { computed, Injectable, signal } from '@angular/core';
import { IZonas } from '../interfaces/inventario';
import { HttpClient } from '@angular/common/http';
import { base_route } from '../../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class ZonasService {
  private base_router = `${base_route}/zona`;
  private setZonaData = signal<IZonas[]>([]);
  public getZonaData = computed<IZonas[]>(() => this.setZonaData());

  constructor(private httpClient: HttpClient) { }

  getZonas(): void {
    this.httpClient.get<IZonas[]>(this.base_router).subscribe((result: IZonas[])  => {
      this.setZonaData.set(result);
    })
  }

  getZonasByAlmacen(almacenId: string): void {
    this.httpClient.get<IZonas[]>(`${this.base_router}/${almacenId}`).subscribe((result: IZonas[])  => {
      this.setZonaData.set(result);
    })
  }

}
