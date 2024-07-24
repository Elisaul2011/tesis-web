import { IShelfLife } from "../../interfaces/shelfLife";
import { IColumns } from "../../interfaces/table.interface";

export const columnsShelfLife: IColumns[] = [
  {
      title: 'Fecha de Movimiento',
      name: 'fechaMovimiento',
      type: 'string'
  },
  {
    title: 'P/N',
    name: 'pn',
    type: 'string'
  },
  {
      title: 'Descripción',
      name: 'descripcion',
      type: 'string'
  },
  {
    title: 'S/N',
    name: 'sn',
    type: 'string'
  },
  {
      title: 'Cantidad',
      name: 'cantidad',
      type: 'string'
  },
  {
    title: 'Origen',
    name: 'origen',
    type: 'string'
  },
  {
    title: 'Destino',
    name: 'destino',
    type: 'string'
  },
  {
    title: 'Realizado por',
    name: 'realizado',
    type: 'string'
  },
  {
    title: 'Tipo de Movimiento',
    name: 'tipoMovimiento',
    type: 'string'
  },
  {
    title: 'Estado',
    name: 'estado',
    type: 'string'
  },
  {
    title: 'Ordenes',
    name: 'order',
    type: 'string'
  },
];

export const shelfLife: IShelfLife[] = [

]
