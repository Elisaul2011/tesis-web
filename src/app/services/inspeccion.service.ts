import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { base_route } from '../../../enviroment';
import { IInventario } from '../interfaces/inventario';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class inspeccionService extends BaseService  {

  private route_almacenes = `${base_route}/almacen`;
  private setAlmacenesData = signal<IInventario[]>([]);
  public getAlmacenesData = computed<IInventario[]>(() => this.setAlmacenesData());

  // constructor(private httpClient: HttpClient) { }

  getAlmacenes(): void {
    this.httpClient.get<IInventario[]>(this.route_almacenes).subscribe((result:IInventario[])  => {
      this.setAlmacenesData.set(result);
    })
  }

  getZonas(): void {
    this.httpClient.get<IInventario[]>(this.route_almacenes).subscribe((result:IInventario[])  => {
      this.setAlmacenesData.set(result);
    })
  }

  postAlmacenes(bodyUser: any): void {
    this.httpClient.post(this.route_almacenes, bodyUser).subscribe(result => {
       
      if(result){
        this.getAlmacenes();
      }
    })
  }

  putAlmacenes(bodyUser: any): void {
    this.httpClient.put(this.route_almacenes, bodyUser).subscribe(result => {
       
      if(result){
        this.getAlmacenes();
      }
    })
  }

}
