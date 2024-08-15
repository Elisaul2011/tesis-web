import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IHistorial } from "../../interfaces/historial";
import { IColumns } from "../../interfaces/table.interface";

export const columnsHistorial: IColumns<IHistorial>[] = [
  {
    title: 'Descripción',
    name: '.descripcion',
    valueColumn: (element) => element.description,
    type: 'string',
  },
  {
    title: 'P/N',
    name: '.pn',
    valueColumn: (element) => element.pn,
    type: 'string'
  },
  {
    title: 'S/N',
    name: '.sn',
    valueColumn: (element) => element.sn,
    type: 'string'
  },
  {
    title: 'Cantidad',
    name: 'cantidad',
    valueColumn: (element) => element.cantidad,
    type: 'string'
  },
  {
    title: 'Realizado Por',
    name: 'madeBy',
    valueColumn: (element) => `${element.user.nameUser} ${element.user.lastnameUser}`,
    type: 'string'
  },
  {
    title: 'Tipo de Movimiento',
    name: 'tipomovimiento.tipoMovimiento',
    valueColumn: (element) => element.tipomovimiento.tipoMovimiento,
    type: 'string'
  },
  {
    title: 'Estado del Componente',
    name: 'estado.estado',
    valueColumn: (element) => element.estado.estado,
    type: 'string'
  },
  {
    title: '# Order',
    name: 'orderHistorial',
    valueColumn: (element) => element.orderHistorial,
    type: 'string'
  },
  {
    title: 'Fecha del Movimiento',
    name: 'fechaMovimiento',
    valueColumn: (element) => element.fechaMovimiento,
    type: 'date'
  },
];
