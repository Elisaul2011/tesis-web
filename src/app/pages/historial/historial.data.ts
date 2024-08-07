import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IColumns } from "../../interfaces/table.interface";

export const columnsHistorial: IColumns<any>[] = [
  {
    title: 'Fecha del Movimiento',
    name: 'fechaMovimiento',
    valueColumn: () => '',
    type: 'string'
  },
  {
    title: 'P/N',
    name: 'pn',
    valueColumn: () => '',
    type: 'string'
  },
  {
    title: 'Descripción',
    name: 'descripcion',
    valueColumn: () => '',
    type: 'icon',
    icon: 'edit'
  },
  {
    title: 'S/N',
    name: 'sn',
    valueColumn: () => '',
    type: 'string'
  },
  {
    title: 'Cantidad',
    name: 'cantidad',
    valueColumn: () => '',
    type: 'string'
  },
  {
    title: 'Realizado Por',
    name: '',
    valueColumn: () => '',
    type: 'string'
  },
  {
    title: 'Tipo de Movimiento',
    name: 'idTipoMovimiento',
    valueColumn: () => '',
    type: 'string'
  },
  {
    title: 'Estado del Componente',
    name: 'estadoId',
    valueColumn: () => '',
    type: 'string'
  },
  {
    title: '# Order',
    name: 'order',
    valueColumn: () => '',
    type: 'string'
  },
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

