import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IColumns } from "../../interfaces/table.interface";

export const columnsHistorial: IColumns<any>[] = [
  {
    title: 'Fecha del Movimiento',
    name: 'Ubicación',
    valueColumn: () => '',
    type: 'string'
  },
  {
    title: 'P/N',
    name: 'Zona',
    valueColumn: () => '',
    type: 'string'
  },
  {
    title: 'Descripción',
    name: 'Descripción',
    valueColumn: () => '',
    type: 'icon',
    icon: 'edit'
  },
  {
    title: 'S/N',
    name: 'S',
    valueColumn: () => '',
    type: 'string'
  },
  {
    title: 'Cantidad',
    name: 'Cantidad',
    valueColumn: () => '',
    type: 'string'
  },
  {
    title: 'Origen',
    name: 'Lote',
    valueColumn: () => '',
    type: 'string'
  },
  {
    title: 'Destino',
    name: 'Condición',
    valueColumn: () => '',
    type: 'string'
  },
  {
    title: 'Realizado Por',
    name: 'Estado',
    valueColumn: () => '',
    type: 'string'
  },
  {
    title: 'Tipo de Movimiento',
    name: 'Movimiento',
    valueColumn: () => '',
    type: 'string'
  },
  {
    title: 'Estado del Componente',
    name: 'Componente',
    valueColumn: () => '',
    type: 'string'
  },
  {
    title: '# Order',
    name: 'Order',
    valueColumn: () => '',
    type: 'string'
  },
  // {
  //   title: 'Eliminar',
  //   name: 'delete',
  // valueColumn: () => '',
  //   type: 'icon',
  //   icon: 'delete'
  // }
];

export const dataFormUser: IDataForm[] = [
  {
    label: 'Nombre de usuario',
    formControl: 'nameUser',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'Apellido de usuario',
    formControl: 'lastnameUser',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'Rol de usuario',
    formControl: 'rolId',
    value: '',
    required: true,
    typeInput: 'select',
    option: []
  },
];


export const formularioUser: IFormulario = {
  title: 'Formulario de usuarios',
  dataForm: dataFormUser
}

