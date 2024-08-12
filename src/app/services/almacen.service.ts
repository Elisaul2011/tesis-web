import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { base_route } from '../../../enviroment';
import { BodyCreateAlmacen, BodyUpdateAlmacen, IAlmacenes } from '../interfaces/almacenes';
import { BaseResponse } from '../interfaces/base.interface';
import { BaseService } from './base.service';


@Injectable({
  providedIn: 'root'
})
export class almacenService extends BaseService {
  private readonly route_almacenes = `${base_route}/almacen`;
  private setAlmacenesData = signal<IAlmacenes[]>([]);
  public getAlmacenesData = computed<IAlmacenes[]>(() => this.setAlmacenesData());

  // constructor(private httpClient: HttpClient) { }

  getAlmacenes(): void {
    this.httpClient.get<IAlmacenes[]>(this.route_almacenes).subscribe((result: IAlmacenes[])  => {
      this.setAlmacenesData.set(result);
    })
  }

  postAlmacenes(bodyAlmacenes: BodyCreateAlmacen): void {
    this.httpClient.post<BaseResponse>(this.route_almacenes, bodyAlmacenes).subscribe((result: BaseResponse) => {
       
      if(result){
        this.getAlmacenes();
      }
    })
  }

  putAlmacenes(putAlmacen: BodyUpdateAlmacen): void {
    this.httpClient.put<BaseResponse>(this.route_almacenes, putAlmacen).subscribe((result:BaseResponse) => {
       
      if(result){
        this.getAlmacenes();
      }
    })
  }

  deleteAlmacenes(idAlmacen: number): void {
    this.httpClient.delete<BaseResponse>(`${this.route_almacenes}/${idAlmacen}`).subscribe((result:BaseResponse) => {
       
      if(result){
        this.getAlmacenes();
      }
    })
  }

}
