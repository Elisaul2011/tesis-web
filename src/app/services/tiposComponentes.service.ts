import { computed, Injectable, signal } from '@angular/core';
import { ITipocomponente } from '../interfaces/inventario';
import { HttpClient } from '@angular/common/http';
import { base_route } from '../../../enviroment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class TiposComponentesService extends BaseService {
  private base_router = `${base_route}/tipo-componente`;
  private setTiposComponentesData = signal<ITipocomponente[]>([]);
  public getTiposComponentesData = computed<ITipocomponente[]>(() => this.setTiposComponentesData());

  // constructor(private httpClient: HttpClient) { }

  getTiposComponentes(): void {
    this.httpClient.get<ITipocomponente[]>(this.base_router).subscribe((result: ITipocomponente[])  => {
      this.setTiposComponentesData.set(result);
    })
  }
}
