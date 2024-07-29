import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IShelfLife } from "../../interfaces/shelfLife";
import { IColumns } from "../../interfaces/table.interface";
import { dataFormAlmacen } from "../inventario/inventario.data";

export const columnsShelfLife: IColumns[] = [
  {
    title: 'Ubicación',
    name: 'ubicacion',
    type: 'string'
  },
  {
    title: 'Zona',
    name: 'zona',
    type: 'string'
  },
  {
    title: 'P/N',
    name: 'pn',
    type: 'string'
  },
  {
    title: 'Descripción',
    name: 'descripción',
    type: 'string'
  },
  {
    title: 'Tipo',
    name: 'tipo',
    type: 'string'
  },
  {
    title: 'S/N',
    name: 'sn',
    type: 'string'
  },
  {
    title: 'Cantidad',
    name: 'cantidad',
    type: 'string'
  },
  {
    title: 'Lote',
    name: 'lote',
    type: 'string'
  },
  {
    title: 'Estado',
    name: 'estado',
    type: 'string'
  },
  {
    title: 'Shelf Lite',
    name: 'sl',
    type: 'string'
  },
  {
    title: 'Vence en',
    name: 'vence',
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
  dataForm: dataFormAlmacen
}

export const shelfLife: IShelfLife[] = [

]
