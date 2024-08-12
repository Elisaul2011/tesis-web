import { computed, Injectable, signal } from '@angular/core';
import { BodyCreateZona, BodyUpdateZona, IZona } from '../interfaces/inventario';
import { HttpClient } from '@angular/common/http';
import { base_route } from '../../../enviroment';
import { BaseService } from './base.service';
import { BaseResponse } from '../interfaces/base.interface';

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

  postZonas(bodyAlmacenes: BodyCreateZona): void {
    this.httpClient.post<BaseResponse>(this.base_router, bodyAlmacenes).subscribe((result: BaseResponse) => {
      if (result) {
        this.getZonas();
      }
    })
  }

  putZonas(putAlmacen: BodyUpdateZona): void {
    this.httpClient.put<BaseResponse>(this.base_router, putAlmacen).subscribe((result: BaseResponse) => {
      if (result) {
        this.getZonas();
      }
    })
  }

  deleteZonas(idAlmacen: number): void {
    this.httpClient.delete<BaseResponse>(`${this.base_router}/${idAlmacen}`).subscribe((result: BaseResponse) => {
      if (result) {
        this.getZonas();
      }
    })
  }
}
