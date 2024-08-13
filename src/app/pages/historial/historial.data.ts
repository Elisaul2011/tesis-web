import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IHistorial } from "../../interfaces/historial";
import { IColumns } from "../../interfaces/table.interface";

export const columnsHistorial: IColumns<IHistorial>[] = [
  {
    title: 'Descripción',
    name: 'inventario.descripcion',
    valueColumn: (element) => element.inventario.descripcion,
    type: 'string',
  },
  {
    title: 'P/N',
    name: 'inventario.pn',
    valueColumn: (element) => element.inventario.pn,
    type: 'string'
  },
  {
    title: 'S/N',
    name: 'inventario.sn',
    valueColumn: (element) => element.inventario.sn,
    type: 'string'
  },
  {
    title: 'Cantidad',
    name: 'inventario.cantidad',
    valueColumn: (element) => element.inventario.cantidad,
    type: 'string'
  },
  // {
  //   title: 'Realizado Por',
  //   name: '',
  //   valueColumn: (element) => element.inventario.pn,
  //   type: 'string'
  // },
  {
    title: 'Tipo de Movimiento',
    name: 'tipomovimiento.tipoMovimiento',
    valueColumn: (element) => element.tipomovimiento.tipoMovimiento,
    type: 'string'
  },
  {
    title: 'Estado del Componente',
    name: 'inventario.estado.estado',
    valueColumn: (element) => element.inventario.estado.estado,
    type: 'string'
  },
  {
    title: '# Order',
    name: 'inventario.order',
    valueColumn: (element) => element.inventario.order,
    type: 'string'
  },
  {
    title: 'Fecha del Movimiento',
    name: 'fechaMovimiento',
    valueColumn: (element) => element.fechaMovimiento,
    type: 'date'
  },
];
