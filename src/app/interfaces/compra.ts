export interface ICompra {
  idOrdenCompra: number;
  ordenCompra:   string;
  Fecha:         Date;
  proveedor:     string;
  descripcion:   string;
  cantidad:      number;
  pn:            string;
  sn:            string;
}

export interface BodyCreateCompra {
  ordenCompra:   string;
  fecha:         Date;
  descripcion:   string;
  cantidad:      number;
  userId :      number;
  pn:            string;
  sn:            string;
}

export interface BodyUpdateCompra extends BodyCreateCompra {
  idOrdenCompra: number;
}
