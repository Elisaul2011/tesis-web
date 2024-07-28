
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
