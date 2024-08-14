import { Injectable, computed, signal } from '@angular/core';
import { base_route } from '../../../enviroment';
import { IInventario } from '../interfaces/inventario';
import { BaseService } from './base.service';
import { BaseResponse } from '../interfaces/base.interface';
import { BodyUpdateInspeccion, IInspeccion } from '../interfaces/inspeccion';

@Injectable({
  providedIn: 'root'
})
export class inspeccionService extends BaseService {
  private base_router = `${base_route}/inspeccion`;
  private setInspeccionData = signal<IInspeccion[]>([]);
  public getInspeccionData = computed<IInspeccion[]>(() => this.setInspeccionData());

  getInspeccion(): void {
    this.httpClient.get<IInspeccion[]>(this.base_router).subscribe((result: IInspeccion[]) => {
      this.setInspeccionData.set(result);
    })
  }

  postInspeccion(bodyAlmacenes: any): void {
    this.httpClient.post<BaseResponse>(this.base_router, bodyAlmacenes).subscribe((result: BaseResponse) => {
      if (result) {
        this.getInspeccion();
      }
    })
  }

  putInspeccion(putAlmacen: BodyUpdateInspeccion): void {
    this.httpClient.put<BaseResponse>(this.base_router, putAlmacen).subscribe((result: BaseResponse) => {
      if (result) {
        this.getInspeccion();
      }
    })
    
  }

  deleteInspeccion(idAlmacen: number): void {
    this.httpClient.delete<BaseResponse>(`${this.base_router}/${idAlmacen}`).subscribe((result: BaseResponse) => {
      if (result) {
        this.getInspeccion();
      }
    })
  }
}
