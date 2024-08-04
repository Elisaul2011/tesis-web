import { computed, Injectable, signal } from '@angular/core';
import { ITiposComponentes } from '../interfaces/inventario';
import { HttpClient } from '@angular/common/http';
import { base_route } from '../../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class TiposComponentesService {
  private base_router = `${base_route}/tipo-componente`;
  private setTiposComponentesData = signal<ITiposComponentes[]>([]);
  public getTiposComponentesData = computed<ITiposComponentes[]>(() => this.setTiposComponentesData());

  constructor(private httpClient: HttpClient) { }

  getTiposComponentes(): void {
    this.httpClient.get<ITiposComponentes[]>(this.base_router).subscribe((result: ITiposComponentes[])  => {
      this.setTiposComponentesData.set(result);
    })
  }
}
