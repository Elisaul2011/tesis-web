import { IInventario } from "./inventario";

export interface INecesidades {
    cantidad: number;
    descripcion: string;
    idNecesidadesTecnicas: number;
    inventario: IInventario;
    pn: string;
}