export interface IInventario {
  idInventario: number;
  almacenesId: number;
  zonaId: number;
  pn: string;
  descripcion: string;
  tipoComponenteId: number;
  sn: string;
  cantidad: number;
  lote: string;
  fabricante: string;
  estadoId: number;
  shelfLife: Date;
  order: string;
  ataId: number;
  horasManualesId: number;
  necesidadesTecnicasId: number;
  rolId: number;
  estado: IEstado;
  tipocomponente: ITipocomponente;
  almacenes: Almacenes;
  zona: IZona;
}

export interface Almacenes {
  idAlmacenes: number;
  nombre: string;
  descripcion: string;
  pais: string;
  ciudad: string;
  estado: number;
}

export interface IEstado {
  idEstado: number;
  estado: string;
}

export interface ITipocomponente {
  idTipoComponente: number;
  tipoComponente: string;
}

export interface IZona {
  idZona: number;
  zona: string;
  descripcionZona: string;
  almacenId: number;
  almacenes: Almacenes
}

export interface IAtas {
  IdAta: number;
  CodigoAta: string;
  NombreATA: string;
}


export interface BodyInventario {
  almacenesId: number;
  zonaId: number;
  pn: string;
  descripcion: string;
  tipoComponenteId: number;
  sn: string;
  cantidad: number;
  lote: string;
  fabricante: string;
  shelfLife: Date;
  ataId: number;
}


export interface BodyCreateZona {
  zona: string;
  descripcionZona: string;
  almacenId: number;
}
export interface BodyUpdateZona extends BodyCreateZona {
  idZona: number;
}