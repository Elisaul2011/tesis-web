import { INotificaciones } from "../../interfaces/notification";
import { IColumns } from "../../interfaces/table.interface";

export const columnsNotificaciones: IColumns<INotificaciones>[] = [
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
    {
        title: 'Solicitado Por',
        name: 'solocited',
        valueColumn: (element) => `${element.userSolitited.nameUser} ${element.userSolitited.lastnameUser}`,
        type: 'string'
    },
]