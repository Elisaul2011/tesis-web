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
    title: 'Fecha',
    name: 'Fecha',
    valueColumn: (element: ICompra) => element.Fecha,
    type: 'date'
  },
  {
    title: 'P/N',
    name: 'pn',
    valueColumn: (element: ICompra) => element.pn,
    type: 'string'
  },
  {
    title: 'Descripción',
    name: 'descripcion',
    valueColumn: (element: ICompra) => element.descripcion,
    type: 'string'
  },
  {
    title: 'Cantidad',
    name: 'cantidad',
    valueColumn: (element: ICompra) => element.cantidad,
    type: 'string'
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
    formControl: 'orden',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'Fecha',
    formControl: 'Fecha',
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
    label: 'Descripción',
    formControl: 'descripcion',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'Cantidad',
    formControl: 'cantidad',
    value: '',
    required: true,
    typeInput: 'text'
  },
];


export const formularioCompra: IFormulario = {
  title: 'Orden de compra',
  dataForm: dataFormCompra
}