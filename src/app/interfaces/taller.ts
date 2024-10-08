import { IInventario } from "./inventario";

export interface ITaller {
  idTaller:     number;
  taller:       string;
  inventarioId: number;
  inventario: IInventario;
}

export interface BodyCreateTaller {
  inventarioId: number;
  madeBy: number;
}

export interface BodyUpdateTaller extends BodyCreateTaller {
  idTaller: number;
}
