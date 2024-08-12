import { IInventario } from "../../interfaces/inventario";
import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IColumns } from "../../interfaces/table.interface";

export const columnsInventario: IColumns<IInventario>[] = [
  {
    title: 'Ubicación',
    name: 'almacenes.nombre',
    valueColumn: (element) => element.almacenes.nombre,
    type: 'string'
  },
  {
    title: 'Zona',
    name: 'zona.zona',
    valueColumn: (element) => element.zona.zona,
    type: 'string'
  },
  {
    title: 'P/N',
    name: 'pn',
    valueColumn: (element) => element.pn,
    type: 'string',
  },
  {
    title: 'Descripción',
    name: 'descripcion',
    valueColumn: (element) => element.descripcion,
    type: 'string'
  },
  {
    title: 'Tipo',
    name: 'tipocomponente.tipoComponente',
    valueColumn: (element) => element.tipocomponente.tipoComponente,
    type: 'string'
  },
  {
    title: 'S/N',
    name: 'sn',
    valueColumn: (element) => element.sn,
    type: 'string'
  },
  {
    title: 'Cantidad',
    name: 'cantidad',
    valueColumn: (element) => element.cantidad,
    type: 'string'
  },
  {
    title: 'Lote',
    name: 'lote',
    valueColumn: (element) => element.lote,
    type: 'string'
  },
  {
    title: 'Estado',
    name: 'estado.estado',
    valueColumn: (element) => element.estado.estado,
    type: 'string'
  },
  {
    title: 'Shelf Lite',
    name: 'shelfLife',
    valueColumn: (element) => element.shelfLife,
    type: 'date'
  },
  {
    title: '# Orden',
    name: 'order',
    valueColumn: (element) => element.order,
    type: 'string'
  },
  {
    title: 'Editar',
    name: 'edit',
    valueColumn: () => 'edit',
    type: 'icon',
    icon: 'edit',
    color: 'primary'
  }
  // {
  //   title: 'Eliminar',
  //   name: 'delete',
  //   valueColumn: () => 'delete',
  //   type: 'icon',
  //   icon: 'delete',
  //   color: 'warn'
  // }
];

export const dataFormAlmacen: IDataForm[] = [
  {
    label: 'Orden de Compra',
    formControl: 'orderCompraId',
    value: '',
    required: true,
    typeInput: 'select',
    disabled: false,
    option: [],
    autocomplete: true
  },
  {
    label: 'Ubicación',
    formControl: 'almacenesId',
    value: '',
    required: true,
    typeInput: 'select',
    disabled: false,
    option: [],
    main: true
  },
  {
    label: 'Zona',
    formControl: 'zonaId',
    value: '',
    required: true,
    typeInput: 'select',
    disabled: false,
    option: [],
    detectChange: true
  },
  {
    label: 'P/N',
    formControl: 'pn',
    value: '',
    required: true,
    typeInput: 'text',
    disabled: true,
    autoFill: true
  },
  {
    label: 'Descripción',
    formControl: 'descripcion',
    value: '',
    required: true,
    typeInput: 'text',
    disabled: true,
    autoFill: true
  },
  {
    label: 'ATA',
    formControl: 'ataId',
    value: '',
    required: true,
    typeInput: 'select',
    disabled: false,
    option: []
  },
  {
    label: 'Fabricante',
    formControl: 'proveedor',
    value: '',
    required: true,
    typeInput: 'text',
    disabled: true,
    autoFill: true
  },
  {
    label: 'Cantidad',
    formControl: 'cantidad',
    value: '',
    required: true,
    typeInput: 'text',
    disabled: true,
    autoFill: true
  },
  {
    label: 'Lote',
    formControl: 'lote',
    value: '',
    required: true,
    typeInput: 'text',
    disabled: false,
  },
  {
    label: 'Tipo de componente',
    formControl: 'tipoComponenteId',
    value: 0,
    required: true,
    typeInput: 'select',
    disabled: false,
    option: []
  },
  {
    label: 'S/N',
    formControl: 'sn',
    value: '',
    required: true,
    typeInput: 'text',
    disabled: true,
    autoFill: true
  },
  {
    label: 'Fecha de Shelf Life',
    formControl: 'shelfLife',
    value: '',
    required: true,
    typeInput: 'date',
    disabled: false,
  },
];

export const dataFormAsignar: IDataForm[] = [
  {
    label: 'Seleccionar componente',
    formControl: 'inventories',
    value: '',
    required: true,
    typeInput: 'selectMulti',
    disabled: false,
    option: [],
  },
  {
    label: 'Asignar Orden',
    formControl: 'userTecnic',
    value: '',
    required: true,
    typeInput: 'select',
    disabled: false,
    option: [],
  },
  {
    label: 'Tipo de Orden',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'select',
    disabled: false,
    option: [
      {
        label: 'Orden de trabajo',
        value: 1
      },
      {
        label: 'Orden de taller',
        value: 2
      }
    ]
  },
  {
    label: '#Orden',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'text',
    disabled: false,
  },
];

//Una vez ingresado el componente, este queda por defecto en estado "esperando por inspeccion"


export const formularioInventario: IFormulario = {
  title: 'Registrar Nuevo Componente',
  dataForm: dataFormAlmacen
}

export const formularioAsignar: IFormulario = {
  title: 'Asignar Orden',
  dataForm: dataFormAsignar
}