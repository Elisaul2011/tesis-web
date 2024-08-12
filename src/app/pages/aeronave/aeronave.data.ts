import { IAeronave } from "../../interfaces/aeronave";
import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IColumns, IConfigTable } from "../../interfaces/table.interface";

export const columnsAeronave: IColumns<IAeronave>[] = [
  {
    title: 'Aeronave',
    name: 'aeronave',
    valueColumn: (element) => element.aeronave,
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
    title: 'Orden de Trabajo',
    name: 'inventario.order',
    valueColumn: (element) => element.inventario.order,
    type: 'string'
  },
  {
    title: 'Confirmar',
    name: 'edit',
    valueColumn: () => '',
    type: 'icon',
    icon: 'check_circle',
    color: 'primary'
  }
];

export const dataFormAeronave: IDataForm[] = [
  {
    label: 'Aeronave',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'text',
    disabled: false
  },
  {
    label: 'Orden de trabajo',
    formControl: '',
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
    label: 'Realizado por',
    formControl: '',
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
    formControl: '',
    value: '',
    required: true,
    typeInput: 'date',
    disabled: false
  },
  //falta la tabla de componentes seleccionadas
];


export const formularioAeronave: IFormulario = {
  title: 'Instalar Componente',
  dataForm: dataFormAeronave
}


export const configTableAeronave: IConfigTable = {
  btnAdd: false
}