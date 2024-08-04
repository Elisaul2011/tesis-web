
export interface IAlmacenes {
  idAlmacenes: number;
  nombre:      string;
  descripcion: string;
  pais:        string;
  ciudad:      string;
  estado:      number;
}

export interface BodyCreateAlmacen {
  ciudad: string;
  descripcion: string;
  estado: number;
  pais: string;
  nombre: string;
}

export interface BodyUpdateAlmacen extends BodyCreateAlmacen {
  idAlmacenes: number;
}
