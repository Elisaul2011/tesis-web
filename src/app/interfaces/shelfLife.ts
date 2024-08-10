import { IInventario } from "./inventario";

export interface IShelfLife {
  idReporteShelfLife: number;
  inventarioId: number;
  venceEn: number;
  inventario: IInventario;
}