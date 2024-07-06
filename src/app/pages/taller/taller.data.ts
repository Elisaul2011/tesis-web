import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IColumns } from "../../interfaces/table.interface";

export const columnsTaller: IColumns[] = [
  {
    title: 'Taller',
    name: '',
    type: 'string'
  },
  {
    title: 'P/N',
    name: '',
    type: 'string'
  },
  {
    title: 'Descripción',
    name: '',
    type: 'string'
  },
  {
    title: 'Tipo',
    name: '',
    type: 'string'
  },
  {
    title: 'S/N',
    name: '',
    type: 'string'
  },
  {
    title: 'Cantidad',
    name: '',
    type: 'string'
  },
  {
    title: 'Workshop Order',
    name: '',
    type: 'string'
  },
  {
    title: 'Editar',
    name: 'edit',
    type: 'icon',
    icon: 'edit'
  }
];

export const dataFormTaller: IDataForm[] = [
  {
    label: 'P/N',
    formControl: '',
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
    label: 'Control de mantenimiento',
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
  {
    label: 'Ubicación',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    //este depende de ubicacion
    label: 'Zona',
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
];


export const formularioTaller: IFormulario = {
  title: 'Reparar Componente',
  dataForm: dataFormTaller
}
