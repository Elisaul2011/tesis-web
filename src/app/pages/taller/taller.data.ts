import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IColumns, IConfigTable } from "../../interfaces/table.interface";
import { ITaller } from "../../interfaces/taller";

export const columnsTaller: IColumns<ITaller>[] = [
  {
    title: 'Taller',
    name: 'taller',
    valueColumn: (element) => element.taller,
    type: 'string'
  },
  {
    title: 'P/N',
    name: 'inventario.pn',
    valueColumn: (element) => element.inventario.pn,
    type: 'string'
  },
  {
    title: 'Descripción',
    name: 'inventario.descripcion',
    valueColumn: (element) => element.inventario.descripcion,
    type: 'string'
  },
  {
    title: 'Tipo',
    name: 'inventario.tipocomponente.tipoComponente',
    valueColumn: (element) => element.inventario.tipocomponente.tipoComponente,
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
  {
    title: 'Orden de taller',
    name: 'inventario.order',
    valueColumn: (element) => element.inventario.order,
    type: 'string'
  },
  {
    title: 'Cofirmar',
    name: 'edit',
    valueColumn: () => '',
    type: 'icon',
    icon: 'check_circle',
    color: 'primary'
  }
];

export const dataFormTaller: IDataForm[] = [
  {
    label: 'Realizado por',
    formControl: 'madeBy',
    value: '',
    required: true,
    typeInput: 'select',
    disabled: false,
    option: [
      {
        label: 'Técnico',
        value: 3
      }
    ]
  },
  {
    label: 'Fecha',
    formControl: 'date',
    value: '',
    required: true,
    typeInput: 'date',
    disabled: false,
  },
  //falta tabla de los componente seleccionados
];


export const formularioTaller: IFormulario = {
  title: 'Reparar Componente',
  dataForm: dataFormTaller
}


export const configTableTaller: IConfigTable = {
  btnAdd: false
}