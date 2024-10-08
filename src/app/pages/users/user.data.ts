import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IColumns } from "../../interfaces/table.interface";
import { IUsers } from "../../interfaces/users";

export const columnsUser: IColumns<IUsers>[] = [
  {
    title: 'Nombre',
    name: 'nameUser',
    valueColumn: (element: IUsers) => element.nameUser,
    type: 'string'
  },
  {
    title: 'Apellido',
    name: 'lastnameUser',
    valueColumn: (element: IUsers) => element.lastnameUser,
    type: 'string'
  },
  {
    title: 'Rol',
    name: 'roles.rol',
    valueColumn: (element: IUsers) => element.roles.rol,
    type: 'string'
  },
  {
    title: 'Activo',
    name: 'active',
    valueColumn: (element: IUsers) => element.active,
    type: 'boolean',
  },
  {
    title: 'Editar',
    name: 'edit',
    valueColumn: () => 'edit',
    type: 'icon',
    icon: 'edit',
    color: 'primary'
  },
  // {
  //   title: 'Eliminar',
  //   name: 'delete',
  //   valueColumn: () => 'delete',
  //   type: 'icon',
  //   icon: 'delete',
  //   color: 'warn'
  // }
];

export const dataFormUser: IDataForm[] = [
  {
    label: 'Nombre de usuario',
    formControl: 'nameUser',
    value: '',
    required: true,
    typeInput: 'text',
    disabled: false,
  },
  {
    label: 'Apellido de usuario',
    formControl: 'lastnameUser',
    value: '',
    required: true,
    typeInput: 'text',
    disabled: false,
  },
  {
    label: 'Rol de usuario',
    formControl: 'rolId',
    value: '',
    required: true,
    typeInput: 'select',
    disabled: false,
    option: []
  },
  {
    label: 'Contraseña',
    formControl: 'password',
    value: '',
    required: true,
    typeInput: 'password',
    disabled: false,
  },
  {
    label: 'Activo',
    formControl: 'active',
    value: false,
    required: true,
    typeInput: 'boolean',
    disabled: false,
  },
];


export const formularioUser: IFormulario = {
  title: 'Registro de usuario',
  dataForm: dataFormUser
}

