
export interface IAlmacenes {
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


export interface BodyCreateAlmacen {
  ciudad: string;
  descripcion: string;
  estado: number;
  pais: string;
  nombre: string;
  zonaId: number;
}

export interface BodyUpdateAlmacen extends BodyCreateAlmacen {
  idAlmacenes: number;
}
