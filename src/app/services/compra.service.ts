import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { base_route } from '../../../enviroment';
import { BodyCreateCompra, BodyUpdateCompra, ICompra } from '../interfaces/compra';
import { BaseResponse } from '../interfaces/base.interface';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CompraService extends BaseService {

  private route_compra = `${base_route}/compra`;
  private setCompraData = signal<ICompra[]>([]);
  public getCompraData = computed<ICompra[]>(() => this.setCompraData());


  // constructor(private httpClient: HttpClient) {}
  getCompra(): void {
    this.httpClient.get<ICompra[]>(this.route_compra).subscribe((result: ICompra[]) => {
      this.setCompraData.set(result);
    })
  }

  getCompraExcelFile(): void {
    this.httpClient.get(`${this.route_compra}/imprimir`, { responseType: 'blob' }).subscribe((result) => {

      if(result.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
        const url = window.URL.createObjectURL(result);
        const link = document.createElement('a');
        link.href = url;
        link.download = `nombre-compra.xlsx`;
        link.click();
      }
    })
  }

  postCompra(bodyCompra: BodyCreateCompra): void {
    this.httpClient.post<BaseResponse>(this.route_compra, bodyCompra).subscribe((result: BaseResponse) => {
      if (result) {
        this.getCompra();
      }
    })
  }

  putCompra(putCompra: BodyUpdateCompra): void {
    this.httpClient.put<BaseResponse>(this.route_compra, putCompra).subscribe((result: BaseResponse) => {
      if (result) {
        this.getCompra();
      }
    })
  }

  deleteCompra(idOrdenCompra: number): void {
    this.httpClient.delete<BaseResponse>(`${this.route_compra}/${idOrdenCompra}`).subscribe((result: BaseResponse) => {
      if (result) {
        this.getCompra();
      }
    })
  }

}
