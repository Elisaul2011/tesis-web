import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IInventario } from "../../interfaces/inventario";
import { IColumns, IConfigTable } from "../../interfaces/table.interface";

export const columnsInspeccion: IColumns<IInventario>[] = [
  {
    title: 'Ubicación',
    valueColumn: (element: IInventario) => element.almacenes.nombre,
    name: 'almacenes.nombre',
    type: 'string'
  },
  {
    title: 'Zona',
    valueColumn: (element: IInventario) => element.zona.zona,
    name: 'zona.zona',
    type: 'string'
  },
  {
    title: 'P/N',
    valueColumn: (element: IInventario) => element.pn,
    name: 'pn',
    type: 'string'
  },
  {
    title: 'Descripción',
    valueColumn: (element: IInventario) => element.descripcion,
    name: 'descripcion',
    type: 'string',
  },
  {
    title: 'Tipo',
    valueColumn: (element: IInventario) => element.tipocomponente.tipoComponente,
    name: 'tipocomponente.tipoComponente',
    type: 'string'
  },
  {
    title: 'S/N',
    valueColumn: (element: IInventario) => element.sn,
    name: 'sn',
    type: 'string'
  },
  {
    title: 'Cantidad',
    valueColumn: (element: IInventario) => element.cantidad,
    name: 'cantidad',
    type: 'string'
  },
  {
    title: 'Lote',
    valueColumn: (element: IInventario) => element.lote,
    name: 'lote',
    type: 'string'
  },
  {
    title: 'Estado',
    valueColumn: (element) => element.estado.estado,
    name: 'estado.estado',
    type: 'string',
  },
  {
    title: 'Editar',
    name: 'edit',
    valueColumn: () => 'edit',
    type: 'icon',
    icon: 'edit',
    color: 'primary'
  }
];

export const dataFormInspeccion: IDataForm[] = [
  {
    label: 'Orden de Inspeccion',
    formControl: 'orderInspect',
    value: '',
    required: true,
    typeInput: 'text',
    disabled: false,
  },
  {
    label: 'Inspeccionado por',
    formControl: 'inspectecBy',
    value: '',
    required: true,
    typeInput: 'select',
    disabled: false,
    option: []
  },
  {
    label: 'Aprobado',
    formControl: 'active',
    value: false,
    required: true,
    typeInput: 'boolean',
    disabled: false,
  },
  //falta la tabla de los componentes selecionados
];

export const formularioInspeccion: IFormulario = {
  title: 'Aprobación de Componentes',
  dataForm: dataFormInspeccion
}

export const configTableInspeccion: IConfigTable = {
  btnAdd: false
}