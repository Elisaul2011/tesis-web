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
    title: 'Workshop Order',
    name: 'inventario.order',
    valueColumn: (element) => element.inventario.order,
    type: 'string'
  },
  {
    title: 'Cofirmar',
    name: 'confirm',
    valueColumn: () => '',
    type: 'icon',
    icon: 'check_circle',
    color: 'primary'
  }
];

export const dataFormTaller: IDataForm[] = [
  {
    label: 'Fecha',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'Taller',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'Orden de Taller',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'select',
    option: [
      {
        label: 'Técnico',
        value: 3
      }
    ]
  },
  {
    label: 'Realizado por',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'select',
    option: [
      {
        label: 'Técnico',
        value: 3
      }
    ]
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