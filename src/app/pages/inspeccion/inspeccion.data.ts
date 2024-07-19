import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IColumns } from "../../interfaces/table.interface";

export const columnsUser: IColumns[] = [
  {
    title: 'Ubicación',
    name: 'Ubicación',
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
    type: 'icon',
    icon: 'edit'
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
    title: 'Condición',
    name: 'Condición',
    type: 'string'
  },
  {
    title: 'Estado',
    name: 'Estado',
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

