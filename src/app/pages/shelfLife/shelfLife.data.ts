import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IShelfLife } from "../../interfaces/shelfLife";
import { IColumns } from "../../interfaces/table.interface";

export const columnsShelfLife: IColumns<IShelfLife>[] = [
  {
    title: 'Ubicación',
    name: 'inventario.almacenes.nombre',
    valueColumn: (element) => element.inventario.almacenes.nombre,
    type: 'string',
    loop: 3
  },
  {
    title: 'Zona',
    name: 'inventario.zona.zona',
    valueColumn: (element) => element.inventario.zona.zona,
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
    title: 'Lote',
    name: 'inventario.lote',
    valueColumn: (element) => element.inventario.lote,
    type: 'string'
  },
  {
    title: 'Estado',
    name: 'inventario.estado.estado',
    valueColumn: (element) => element.inventario.estado.estado,
    type: 'string'
  },
  {
    title: 'Shelf Lite',
    name: 'inventario.shelfLife',
    valueColumn: (element) => element.inventario.shelfLife,
    type: 'date'
  },
  {
    title: 'Vence en',
    name: 'venceEn',
    valueColumn: (element) => element.venceEn,
    type: 'string'
  }
];

export const dataFormShelfLife: IDataForm[] = [
  {
    label: 'Ubicación',
    formControl: 'ubicacion',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'Zona',
    formControl: 'Zona',
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
    formControl: '',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'ATA',
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
  {
    label: 'Fabricante',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'Costo Unitario',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'Tipo de componente',
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
  {
    label: 'S/N',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'Fecha de Shelf Life',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    //este depende de shelf life
    label: 'Condición',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'text'
  },
];

export const formularioShelfLife: IFormulario = {
  title: 'Registrar Nuevo Componente',
  dataForm: dataFormShelfLife
}