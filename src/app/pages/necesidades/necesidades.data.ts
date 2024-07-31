import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IColumns } from "../../interfaces/table.interface";

export const columnsNecesidades: IColumns[] = [
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

export const dataFormNecesidades: IDataForm[] = [
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
        label: 'cantidad',
        formControl: '',
        value: '',
        required: true,
        typeInput: 'text'
    },
];


export const formularioNecesidades: IFormulario = {
    title: 'Solicitud de materiales',
    dataForm: dataFormNecesidades
}

