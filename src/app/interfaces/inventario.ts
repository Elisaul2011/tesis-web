export interface IInventario {
  idInventario:     number;
  almacenesId:      number;
  pn:               string;
  descripcion:      string;
  tipoComponenteId: number;
  sn:               string;
  cantidad:         number;
  lote:             string;
  estadoId:         number;
  shelfLife:        Date;
  order:            string;
  idEstado:         IDEstado;
  idTipoComponente: IDTipoComponente;
  almacenes:        Almacenes;
}

export interface Almacenes {
  idAlmacenes: number;
  nombre:      string;
  descripcion: string;
  pais:        string;
  ciudad:      string;
  estado:      number;
  zonaId:      number;
  idZona:      IDZona;
}

export interface IDZona {
  idZona:          number;
  zona:            string;
  descripcionZona: string;
}

export interface IDEstado {
  idEstado: number;
  estado:   string;
}

export interface IDTipoComponente {
  idTipoComponente: number;
  tipoComponente:   string;
}
