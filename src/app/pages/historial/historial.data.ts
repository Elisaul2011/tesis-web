import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IColumns } from "../../interfaces/table.interface";

export const columnsUser: IColumns[] = [
  {
    title: 'Fecha del Movimiento',
    name: 'Ubicación',
    type: 'string'
  },
  {
    title: 'P/N',
    name: 'Zona',
    type: 'string'
  },
  {
    title: 'Descripción',
    name: 'Descripción',
    type: 'icon',
    icon: 'edit'
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
    title: 'Origen',
    name: 'Lote',
    type: 'string'
  },
  {
    title: 'Destino',
    name: 'Condición',
    type: 'string'
  },
  {
    title: 'Realizado Por',
    name: 'Estado',
    type: 'string'
  },
  {
    title: 'Tipo de Movimiento',
    name: 'Movimiento',
    type: 'string'
  },
  {
    title: 'Estado del Componente',
    name: 'Componente',
    type: 'string'
  },
  {
    title: '# Order',
    name: 'Order',
    type: 'string'
  },
  // {
  //   title: 'Eliminar',
  //   name: 'delete',
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

