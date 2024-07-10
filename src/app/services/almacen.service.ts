import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { base_route } from '../../../enviroment';
import { IAlmacenes } from '../interfaces/almacen';

@Injectable({
  providedIn: 'root'
})
export class almacenService {

  private route_almacenes = `${base_route}/almacen`;
  private setAlmacenesData = signal<IAlmacenes[]>([]);
  public getAlmacenesData = computed<IAlmacenes[]>(() => this.setAlmacenesData());

  constructor(private httpClient: HttpClient) { }

  getAlmacenes(): void {
    this.httpClient.get<IAlmacenes[]>(this.route_almacenes).subscribe((result:IAlmacenes[])  => {
      this.setAlmacenesData.set(result);
    })
  }

  getZonas(): void {
    this.httpClient.get<IAlmacenes[]>(this.route_almacenes).subscribe((result:IAlmacenes[])  => {
      this.setAlmacenesData.set(result);
    })
  }

  postAlmacenes(bodyUser: any): void {
    this.httpClient.post(this.route_almacenes, bodyUser).subscribe(result => {
      console.log(result);
      if(result){
        this.getAlmacenes();
      }
    })
  }

  putAlmacenes(bodyUser: any): void {
    this.httpClient.put(this.route_almacenes, bodyUser).subscribe(result => {
      console.log(result);
      if(result){
        this.getAlmacenes();
      }
    })
  }

}
