import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IColumns } from "../../interfaces/table.interface";
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
    name: 'pn',
    valueColumn: (element) => element.idInventario.pn,
    type: 'string'
  },
  {
    title: 'Descripción',
    name: 'descripcion',
    valueColumn: (element) => element.idInventario.descripcion,
    type: 'string'
  },
  {
    title: 'Tipo',
    name: 'tipo',
    valueColumn: (element) => element.idInventario.idTipoComponente.tipoComponente,
    type: 'string'
  },
  {
    title: 'S/N',
    name: 'sn',
    valueColumn: (element) => element.idInventario.sn,
    type: 'string'
  },
  {
    title: 'Cantidad',
    name: 'cantidad',
    valueColumn: (element) => element.idInventario.cantidad,
    type: 'string'
  },
  {
    title: 'Workshop Order',
    name: 'workshopOrder',
    valueColumn: (element) => element.idInventario.order,
    type: 'string'
  },
  {
    title: 'Editar',
    name: 'edit',
    valueColumn: () => '',
    type: 'icon',
    icon: 'edit'
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
    typeInput: 'text'
  },
  {
    label: 'Realizado por',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'select',
    option: [
      {
        label: 'Almacenista',
        value: 1
      }
    ]
  },
  //falta tabla de los componente seleccionados
];


export const formularioTaller: IFormulario = {
  title: 'Reparar Componente',
  dataForm: dataFormTaller
}
