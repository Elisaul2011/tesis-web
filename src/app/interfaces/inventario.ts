export interface IInventario {
  idInventario:     number;
  almacenesId:      number;
  zonaId:           number;
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
  zonas:            IZonas;
}

export interface Almacenes {
  idAlmacenes: number;
  nombre:      string;
  descripcion: string;
  pais:        string;
  ciudad:      string;
  estado:      number;
}

export interface IDEstado {
  idEstado: number;
  estado:   string;
}

export interface IDTipoComponente {
  idTipoComponente: number;
  tipoComponente:   string;
}

export interface IZonas {
  idZona:          number;
  zona:            string;
  descripcionZona: string;
  almacenId:       number;
}

export interface IAtas {
  IdAta:       number;
  CodigoAta: string;
  NombreATA: string;
}
export interface ITiposComponentes {
  idTipoComponente: number;
  tipoComponente:   string;
}
