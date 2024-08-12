import { IInventario } from "./inventario";

export interface IInspeccion {
  idInspeccion: number;
  inventarioId: number;
  inventario: IInventario
}

export interface BodyUpdateInspeccion {
  idInventario: number;
  orderInspect: string;
  inspectecBy: number;
  active: boolean;
}