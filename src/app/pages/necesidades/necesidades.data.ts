import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IColumns } from "../../interfaces/table.interface";

export const columnsAlmacenes: IColumns[] = [
    {
        title: 'P/N',
        name: 'nombre',
        type: 'string'
    },
    {
      title: 'Descripción',
      name: 'pais',
      type: 'string'
    },
    {
        title: 'Cantidad',
        name: 'descripcion',
        type: 'string'
    },
    {
        title: 'Editar',
        name: 'edit',
        type: 'icon',
        icon: 'edit'
    }
];

export const dataFormAlmacenes: IDataForm[] = [
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


export const formularioAlmacenes: IFormulario = {
    title: 'Formulario de usuarios',
    dataForm: dataFormAlmacenes
}

