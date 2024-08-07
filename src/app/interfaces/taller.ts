export interface ITaller {
  idTaller:     number;
  taller:       string;
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


export interface BodyCreateTaller {
  taller: string;
  inventarioId: number
  workshopOrder: string;
}

export interface BodyUpdateTaller extends BodyCreateTaller {
  idTaller: number;
}
