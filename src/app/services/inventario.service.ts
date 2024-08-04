import { computed, Injectable, signal } from '@angular/core';
import { base_route } from '../../../enviroment';
import { IInventario } from '../interfaces/inventario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private base_router = `${base_route}/inventario`;
  private setInventarioData = signal<IInventario[]>([]);
  public getInventarioData = computed<IInventario[]>(() => this.setInventarioData());

  constructor(private httpClient: HttpClient) { }

  getInventario(): void {
    this.httpClient.get<IInventario[]>(this.base_router).subscribe((result: IInventario[]) => {
      this.setInventarioData.set(result);
      console.log(result);
    })
  }
}
