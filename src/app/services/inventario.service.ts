import { computed, Injectable, signal } from '@angular/core';
import { base_route } from '../../../enviroment';
import { IDZona, IInventario } from '../interfaces/inventario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private base_router = `${base_route}/inventario`;
  private setInventarioData = signal<IInventario[]>([]);
  public getInventarioData = computed<IInventario[]>(() => this.setInventarioData());

  private route_zona = `${this.base_router}/zonas`;
  private setZonaData = signal<IDZona[]>([]);
  public getZonaData = computed<IDZona[]>(() => this.setZonaData());

  constructor(private httpClient: HttpClient) { }

  getInventario(): void {
    this.httpClient.get<IInventario[]>(this.base_router).subscribe((result: IInventario[]) => {
      this.setInventarioData.set(result);
      console.log(result);
    })
  }

  getZonas(): void {
    this.httpClient.get<IDZona[]>(this.route_zona).subscribe((result: IDZona[])  => {
      this.setZonaData.set(result);
    })
  }


}
