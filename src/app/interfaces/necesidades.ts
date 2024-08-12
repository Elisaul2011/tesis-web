import { IInventario } from "./inventario";

export interface INecesidades {
    cantidad: number;
    descripcion: string;
    idNecesidadesTecnicas: number;
    inventario: IInventario;
    pn: string;
}

export interface BodyNecesidades {
    descripcion: number;
    cantidad: IInventario;
    pn: string;
}
export interface BodyUpdateNecesidades extends BodyNecesidades {
    idNecesidadesTecnicas: number;
}