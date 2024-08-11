import { IInventario } from "./inventario";

export interface IInspeccion {
  idInspeccion: number;
  inventarioId: number;
  inventario: IInventario
}
