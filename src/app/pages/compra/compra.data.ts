import { ICompra } from "../../interfaces/compra";
import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IColumns } from "../../interfaces/table.interface";

export const columnsCompra: IColumns<ICompra>[] = [
  {
    title: 'Orden de compra',
    name: 'ordenCompra',
    valueColumn: (element: ICompra) => element.ordenCompra,
    type: 'string'
  },
    {
    title: 'Descripción',
    name: 'descripcion',
    valueColumn: (element: ICompra) => element.descripcion,
    type: 'string'
  },
  {
    title: 'P/N',
    name: 'pn',
    valueColumn: (element: ICompra) => element.pn,
    type: 'string'
  },
  {
    title: 'SN',
    name: 'sn',
    valueColumn: (element: ICompra) => element.sn,
    type: 'string'
  },
  {
    title: 'Cantidad',
    name: 'cantidad',
    valueColumn: (element: ICompra) => element.cantidad,
    type: 'string'
  },
  {
    title: 'Proveedor',
    name: 'proveedor',
    valueColumn: (element: ICompra) => element.proveedor,
    type: 'string'
  },
  {
    title: 'Fecha',
    name: 'Fecha',
    valueColumn: (element: ICompra) => element.Fecha,
    type: 'date'
  },
  {
    title: 'Editar',
    name: 'edit',
    valueColumn: () => '',
    type: 'icon',
    icon: 'edit',
    color: 'primary'
  },
  {
    title: 'Eliminar',
    name: 'delete',
    valueColumn: () => '',
    type: 'icon',
    icon: 'delete',
    color: 'warn'
  }
];


export const dataFormCompra: IDataForm[] = [
  {
    label: 'Orden de compra',
    formControl: 'ordenCompra',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'Descripción',
    formControl: 'descripcion',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'P/N',
    formControl: 'pn',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'SN',
    formControl: 'sn',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'Proveedor',
    formControl: 'proveedor',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'Cantidad',
    formControl: 'cantidad',
    value: '',
    required: true,
    typeInput: 'number'
  },
  {
    label: 'Fecha',
    formControl: 'fecha',
    value: '',
    required: true,
    typeInput: 'date'
  },
];

export const formularioCompra: IFormulario = {
  title: 'Registrar Orden de Compra',
  dataForm: dataFormCompra
}
