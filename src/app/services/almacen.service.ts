import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { base_route } from '../../../enviroment';
import { BodyCreateAlmacen, BodyUpdateAlmacen, IAlmacenes, IDZona } from '../interfaces/almacenes';
import { BaseResponse } from '../interfaces/base.interface';


@Injectable({
  providedIn: 'root'
})
export class almacenService {



  private readonly route_almacenes = `${base_route}/almacen`;
  private setAlmacenesData = signal<IAlmacenes[]>([]);
  public getAlmacenesData = computed<IAlmacenes[]>(() => this.setAlmacenesData());

  private route_zonaz = `${this.route_almacenes}/zonas`;
  private setZonaData = signal<IDZona[]>([]);
  public getZonaData = computed<IDZona[]>(() => this.setZonaData());

  constructor(private httpClient: HttpClient) { }

  getAlmacenes(): void {
    this.httpClient.get<IAlmacenes[]>(this.route_almacenes).subscribe((result: IAlmacenes[])  => {
      this.setAlmacenesData.set(result);
    })
  }

  getZonas(): void {
    this.httpClient.get<IDZona[]>(this.route_zonaz).subscribe((result: IDZona[])  => {
      this.setZonaData.set(result);
    })
  }

  postAlmacenes(bodyAlmacenes: BodyCreateAlmacen): void {
    this.httpClient.post<BaseResponse>(this.route_almacenes, bodyAlmacenes).subscribe((result: BaseResponse) => {
      console.log(result);
      if(result){
        this.getAlmacenes();
      }
    })
  }

  putAlmacenes(putAlmacen: BodyUpdateAlmacen): void {
    this.httpClient.put<BaseResponse>(this.route_almacenes, putAlmacen).subscribe((result:BaseResponse) => {
      console.log(result);
      if(result){
        this.getAlmacenes();
      }
    })
  }

  deleteAlmacenes(idAlmacen: number): void {
    this.httpClient.delete<BaseResponse>(`${this.route_almacenes}/${idAlmacen}`).subscribe((result:BaseResponse) => {
      console.log(result);
      if(result){
        this.getAlmacenes();
      }
    })
  }

}
