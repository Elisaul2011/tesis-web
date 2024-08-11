import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IColumns } from "../../interfaces/table.interface";

export const columnsNecesidades: IColumns<any>[] = [
    {
        title: 'P/N',
        name: 'nombre',
        valueColumn: () => '',
        type: 'string'
    },
    {
      title: 'Descripción',
      name: 'pais',
        valueColumn: () => '',
      type: 'string'
    },
    {
        title: 'Cantidad',
        name: 'descripcion',
        valueColumn: () => '',
        type: 'string'
    },
    {
        title: 'Editar',
        name: 'edit',
        valueColumn: () => '',
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
    title: 'Solicitud de Materiales',
    dataForm: dataFormNecesidades
}

