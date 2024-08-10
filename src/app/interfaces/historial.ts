import { IInventario } from "./inventario";

export interface IHistorial {
  idHistorial: number;
  tipoMovimientoId: number;
  inventarioId: number;
  fechaMovimiento: string;
  inventario: IInventario;
  tipomovimiento: ITipoMovimiento
}

export interface ITipoMovimiento {
  idTipoMovimiento: number;
  tipoMovimiento:   string;
}
