import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IInspeccion } from "../../interfaces/inspeccion";
import { IColumns } from "../../interfaces/table.interface";

export const columnsInspeccion: IColumns<IInspeccion>[] = [
  {
    title: 'Ubicación',
    valueColumn: (element: IInspeccion) => element.inventario.almacenes.nombre,
    name: 'inventario.almacenes.nombre',
    type: 'string'
  },
  {
    title: 'Zona',
    valueColumn: (element: IInspeccion) => element.inventario.zona.zona,
    name: 'inventario.zona.zona',
    type: 'string'
  },
  {
    title: 'P/N',
    valueColumn: (element: IInspeccion) => element.inventario.pn,
    name: 'inventario.pn',
    type: 'string'
  },
  {
    title: 'Descripción',
    valueColumn: (element: IInspeccion) => element.inventario.descripcion,
    name: 'inventario.descripcion',
    type: 'string',
  },
  {
    title: 'Tipo',
    valueColumn: (element: IInspeccion) => element.inventario.tipocomponente.tipoComponente,
    name: 'inventario.tipocomponente.tipoComponente',
    type: 'string'
  },
  {
    title: 'S/N',
    valueColumn: (element: IInspeccion) => element.inventario.sn,
    name: 'inventario.sn',
    type: 'string'
  },
  {
    title: 'Cantidad',
    valueColumn: (element: IInspeccion) => element.inventario.cantidad,
    name: 'inventario.cantidad',
    type: 'string'
  },
  {
    title: 'Lote',
    valueColumn: (element: IInspeccion) => element.inventario.lote,
    name: 'inventario.lote',
    type: 'string'
  },
  {
    title: 'Estado',
    valueColumn: (element) => element.inventario.estado.estado,
    name: 'inventario.estado.estado',
    type: 'string',
  }
];

export const dataFormInspeccion: IDataForm[] = [
  {
    label: 'Fecha',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'Aprobado',
    formControl: 'active',
    value: false,
    required: true,
    typeInput: 'boolean',
  },
  {
    label: 'Orden de Inspeccion',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'Inspeccionado por',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'select',
    option: []
  },
  //falta la tabla de los componentes selecionados
];


export const formularioInspeccion: IFormulario = {
  title: 'Aprobación de Componentes',
  dataForm: dataFormInspeccion
}
