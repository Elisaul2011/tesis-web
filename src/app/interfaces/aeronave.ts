import { IInventario } from "./inventario";

export interface IAeronave {
  idAeronave:   number;
  aeronave:     string;
  inventarioId: number;
  inventario: IInventario;
}


export interface BodyCreateAeronave {
  aeronave: string;
  inventarioId: number
  workOrder: string;
}

export interface BodyUpdateAeronave extends BodyCreateAeronave {
  idAeronave: number;
}


