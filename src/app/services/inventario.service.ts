import { computed, Injectable, signal } from '@angular/core';
import { base_route } from '../../../enviroment';
import { IInventario } from '../interfaces/inventario';
import { BaseService } from './base.service';
import { BaseResponse } from '../interfaces/base.interface';

@Injectable({
  providedIn: 'root'
})
export class InventarioService extends BaseService {

  private base_router = `${base_route}/inventario`;
  private setInventarioData = signal<IInventario[]>([]);
  public getInventarioData = computed<IInventario[]>(() => this.setInventarioData());

  private setInventarioServiblesData = signal<IInventario[]>([]);
  public getInventarioServiblesData = computed<IInventario[]>(() => this.setInventarioServiblesData());

  getInventario(): void {
    this.httpClient.get<IInventario[]>(this.base_router).subscribe((result: IInventario[]) => {
      this.setInventarioData.set(result);
    })
  }

  getInventarioServibles(): void {
    this.httpClient.get<IInventario[]>(`${this.base_router}/serviciables`).subscribe((result: IInventario[]) => {
      this.setInventarioServiblesData.set(result);
    })
  }

  postInventario(bodyAlmacenes: any): void {
    this.httpClient.post<BaseResponse>(this.base_router, bodyAlmacenes).subscribe((result: BaseResponse) => {
      if (result) {
        this.getInventario();
      }
    })
  }

  putInventario(putAlmacen: any): void {
    this.httpClient.put<BaseResponse>(this.base_router, putAlmacen).subscribe((result: BaseResponse) => {
      if (result) {
        this.getInventario();
      }
    })
  }

  deleteInventario(idAlmacen: number): void {
    this.httpClient.delete<BaseResponse>(`${this.base_router}/${idAlmacen}`).subscribe((result: BaseResponse) => {
      if (result) {
        this.getInventario();
      }
    })
  }
}
