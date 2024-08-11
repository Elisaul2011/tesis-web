export interface ICompra {
  idOrdenCompra: number;
  ordenCompra:   string;
  Fecha:         Date;
  proveedor:     string;
  descripcion:   string;
  proveedor:   string;
  cantidad:      number;
  pn:            string;
  sn:            string;
}

export interface BodyCreateCompra {
  ordenCompra:   string;
  Fecha:         Date;
  descripcion:   string;
  cantidad:      number;
  pn:            string;
  sn:            string;
}

export interface BodyUpdateCompra extends BodyCreateCompra {
  idOrdenCompra: number;
}
