import { Injectable, computed, signal } from '@angular/core';
import { base_route } from '../../../enviroment';
import { BaseService } from './base.service';
import { BodyCreateAeronave, BodyUpdateAeronave, IAeronave } from '../interfaces/aeronave';

@Injectable({
  providedIn: 'root'
})
export class aeronaveService extends BaseService {

  private route_aeronaves = `${base_route}/aeronave`;
  private setAeronaveData = signal<IAeronave[]>([]);
  public getAeronaveData = computed<IAeronave[]>(() => this.setAeronaveData());

  getAeronaves(): void {
    this.httpClient.get<IAeronave[]>(this.route_aeronaves).subscribe((result:IAeronave[])  => {
      this.setAeronaveData.set(result);
    })
  }

  postAeronaves(bodyAeronave: BodyCreateAeronave): void {
    this.httpClient.post(this.route_aeronaves, bodyAeronave).subscribe(result => {
       
      if(result){
        this.getAeronaves();
      }
    })
  }

  putAeronaves(bodyAeronave: BodyUpdateAeronave): void {
    this.httpClient.put(this.route_aeronaves, bodyAeronave).subscribe(result => {
       
      if(result){
        this.getAeronaves();
      }
    })
  }

}
