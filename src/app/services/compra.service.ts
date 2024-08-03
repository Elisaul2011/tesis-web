import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { base_route } from '../../../enviroment';
import { BodyCreateCompra, BodyUpdateCompra, ICompra } from '../interfaces/compra';
import { BaseResponse } from '../interfaces/base.interface';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private route_compra = `${base_route}/compra`;
  private setCompraData = signal<ICompra[]>([]);
  public getCompraData = computed<ICompra[]>(() => this.setCompraData());


  constructor(private httpClient: HttpClient) {}
  getCompra(): void {
    this.httpClient.get<ICompra[]>(this.route_compra).subscribe((result: ICompra[]) => {
      this.setCompraData.set(result);
      console.log(result);
    })
  }

  postCompra(bodyCompra: BodyCreateCompra): void {
    this.httpClient.post<BaseResponse>(this.route_compra, bodyCompra).subscribe((result: BaseResponse) => {
      console.log(result);
      if(result){
        this.getCompra();
      }
    })
  }

  putCompra(putCompra: BodyUpdateCompra): void {
    this.httpClient.put<BaseResponse>(this.route_compra, putCompra).subscribe((result:BaseResponse) => {
      console.log(result);
      if(result){
        this.getCompra();
      }
    })
  }

  deleteCompra(idOrdenCompra: number): void {
    this.httpClient.delete<BaseResponse>(`${this.route_compra}/${idOrdenCompra}`).subscribe((result:BaseResponse) => {
      console.log(result);
      if(result){
        this.getCompra();
      }
    })
  }

}
