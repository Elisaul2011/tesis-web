import { computed, Injectable, signal } from '@angular/core';
import { BaseService } from './base.service';
import { base_route } from '../../../enviroment';
import { BodyCreateTaller, BodyUpdateTaller, ITaller } from '../interfaces/taller';

@Injectable({
  providedIn: 'root'
})
export class TallerService extends BaseService {

  private route_taller = `${base_route}/taller-reparacion`;
  private setTallerData = signal<ITaller[]>([]);
  public getTallerData = computed<ITaller[]>(() => this.setTallerData());

  getTaller(): void {
    this.httpClient.get<ITaller[]>(this.route_taller).subscribe((result: ITaller[]) => {
      this.setTallerData.set(result);
    })
  }

  postTaller(bodyTaller: BodyCreateTaller): void {
    this.httpClient.post(this.route_taller, bodyTaller).subscribe(result => {
      if (result) {
        this.getTaller();
      }
    })
  }

  putTaller(bodyTaller: BodyUpdateTaller): void {
    this.httpClient.put(this.route_taller, bodyTaller).subscribe(result => {
      if (result) {
        this.getTaller();
      }
    })
  }
}
