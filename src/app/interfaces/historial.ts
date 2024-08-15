export interface IHistorial {
  idHistorial:            number;
  description:            string;
  pn:                     string;
  sn:                     string;
  cantidad:               number;
  madeBy:                 number;
  tipoMovimientoId:       number;
  estadoId:               number;
  orderHistorial:         string;
  fechaMovimiento:        Date;
  inventarioIdInventario: null;
  tipomovimiento:         Tipomovimiento;
  estado:                 Estado;
  user:                   User;
}

export interface Estado {
  idEstado: number;
  estado:   string;
}

export interface Tipomovimiento {
  idTipoMovimiento: number;
  tipoMovimiento:   string;
}

export interface User {
  idUser:       number;
  nameUser:     string;
  lastnameUser: string;
  rolId:        number;
  active:       boolean;
  password:     string;
}
