import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { INecesidades } from "../../interfaces/necesidades";
import { IColumns } from "../../interfaces/table.interface";

export const columnsNecesidades: IColumns<INecesidades>[] = [
    {
        title: 'P/N',
        name: 'pn',
        valueColumn: (element) => element.pn,
        type: 'string'
    },
    {
        title: 'Descripción',
        name: 'descripcion',
        valueColumn: (element) => element.descripcion,
        type: 'string'
    },
    {
        title: 'Cantidad',
        name: 'cantidad',
        valueColumn: (element) => element.cantidad,
        type: 'string'
    },
    // {
    //     title: 'Editar',
    //     name: 'edit',
    //     valueColumn: () => '',
    //     type: 'icon',
    //     icon: 'edit'
    // }
];

export const dataFormNecesidades: IDataForm[] = [
    {
        label: 'Material',
        formControl: 'inventarioId',
        value: '',
        required: true,
        typeInput: 'select',
        option: [],
        disabled: false,
        autocomplete: true
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
        label: 'Cantidad',
        formControl: 'cantidad',
        value: '',
        required: true,
        typeInput: 'number',
        disabled: false,
    },
];


export const formularioNecesidades: IFormulario = {
    title: 'Solicitud de Materiales',
    dataForm: dataFormNecesidades
}

export const dataFormAsignar: IDataForm[] = [
    {
        label: 'Enviar a',
        formControl: 'sendTo',
        value: '',
        required: true,
        typeInput: 'select',
        disabled: false,
        option: [],
    }
];

export const formularioAsignar: IFormulario = {
    title: 'Enviar Solicitud',
    dataForm: dataFormAsignar
}

