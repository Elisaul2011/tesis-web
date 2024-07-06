import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IColumns } from "../../interfaces/table.interface";

export const columnsUser: IColumns[] = [
  {
    title: 'Nombre',
    name: 'nameUser',
    type: 'string'
  },
  {
    title: 'Apellido',
    name: 'lastnameUser',
    type: 'string'
  },
  {
    title: 'Rol',
    name: 'roles',
    type: 'string'
  },
  {
    title: 'Editar',
    name: 'edit',
    type: 'icon',
    icon: 'edit'
  }
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

