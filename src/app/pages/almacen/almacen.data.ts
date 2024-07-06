import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IColumns } from "../../interfaces/table.interface";

export const columnsAlmacen: IColumns[] = [
  {
    title: 'Ubicción',
    name: 'Ubicción',
    type: 'string'
  },
  {
    title: 'Zona',
    name: 'Zona',
    type: 'string'
  },
  {
    title: 'P/N',
    name: 'P',
    type: 'string'
  },
  {
    title: 'Descripción',
    name: 'Descripción',
    type: 'string'
  },
  {
    title: 'Tipo',
    name: 'Tipo',
    type: 'string'
  },
  {
    title: 'S/N',
    name: 'S',
    type: 'string'
  },
  {
    title: 'Cantidad',
    name: 'Cantidad',
    type: 'string'
  },
  {
    title: 'Lote',
    name: 'Lote',
    type: 'string'
  },
  {
    title: 'Estado',
    name: 'Estado',
    type: 'string'
  },
  {
    title: 'Shelf Lite',
    name: 'Shelf',
    type: 'string'
  },
  {
    title: '# Order',
    name: 'Order',
    type: 'string'
  },
  {
    title: 'Editar',
    name: 'edit',
    type: 'icon',
    icon: 'edit'
  }
];

export const dataFormAlmacen: IDataForm[] = [
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


export const formularioAlmacen: IFormulario = {
  title: 'Registrar Nuevo Componente',
  dataForm: dataFormAlmacen
}
