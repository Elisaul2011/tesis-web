export interface IAeronave {
  idAeronave:   number;
  aeronave:     string;
  inventarioId: number;
  idInventario: IDInventario;
}

export interface IDInventario {
  idInventario:     number;
  almacenesId:      number;
  zonaId:           number;
  pn:               string;
  descripcion:      string;
  tipoComponenteId: number;
  sn:               string;
  cantidad:         number;
  lote:             string;
  fabricante:       string;
  estadoId:         number;
  shelfLife:        Date;
  order:            string;
  ataId:            number;
  horasManualesId:  number;
  idTipoComponente: IDTipoComponente;
}

export interface IDTipoComponente {
  idTipoComponente: number;
  tipoComponente:   string;
}


export interface BodyCreateAeronave {
  aeronave: string;
  inventarioId: number
  workOrder: string;
}

export interface BodyUpdateAeronave extends BodyCreateAeronave {
  idAeronave: number;
}


