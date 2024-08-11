import { IInventario } from "./inventario";

export interface ITaller {
  idTaller:     number;
  taller:       string;
  inventarioId: number;
  inventario: IInventario;
}

export interface BodyCreateTaller {
  taller: string;
  inventarioId: number
  workshopOrder: string;
}

export interface BodyUpdateTaller extends BodyCreateTaller {
  idTaller: number;
}
