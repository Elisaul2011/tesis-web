import { computed, Injectable, signal } from '@angular/core';
import { IAtas } from '../interfaces/inventario';
import { HttpClient } from '@angular/common/http';
import { base_route } from '../../../enviroment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AtasService extends BaseService {
  private base_router = `${base_route}/inventario/atas`;
  private setAtaData = signal<IAtas[]>([]);
  public getAtaData = computed<IAtas[]>(() => this.setAtaData());

  // constructor(private httpClient: HttpClient) { }

  getAtas(): void {
    this.httpClient.get<IAtas[]>(this.base_router).subscribe((result: IAtas[])  => {
      this.setAtaData.set(result);
    })
  }
}
