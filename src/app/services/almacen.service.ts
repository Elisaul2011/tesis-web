import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { base_route } from '../../../enviroment';


@Injectable({
  providedIn: 'root'
})
export class almacenService {

  private route_almacenes = `${base_route}/almacen`;
  private setAlmacenesData = signal<[]>([]);
  public getAlmacenesData = computed<[]>(() => this.setAlmacenesData());

  constructor(private httpClient: HttpClient) { }

  getAlmacenes(): void {
    this.httpClient.get<[]>(this.route_almacenes).subscribe((result:[])  => {
      this.setAlmacenesData.set(result);
    })
  }

  getZonas(): void {
    this.httpClient.get<[]>(this.route_almacenes).subscribe((result:[])  => {
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
