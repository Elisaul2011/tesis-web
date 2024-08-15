import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IInventario } from "../../interfaces/inventario";
import { IColumns } from "../../interfaces/table.interface";

const daysUntil = (targetDate: string | Date): string  => {
  const today = new Date();
  const target = new Date(targetDate);

  // Calcular la diferencia en milisegundos
  const differenceInTime = target.getTime() - today.getTime();

  // Convertir la diferencia de milisegundos a días
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

  return `Vence en  ${differenceInDays} días.`;
}

export const columnsShelfLife: IColumns<IInventario>[] = [
  {
    title: 'Ubicación',
    name: 'inventario.almacenes.nombre',
    valueColumn: (element) => element.almacenes.nombre,
    type: 'string',
    loop: 3
  },
  {
    title: 'Zona',
    name: 'zona.zona',
    valueColumn: (element) => element.zona.zona,
    type: 'string'
  },
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
    title: 'Tipo',
    name: 'tipocomponente.tipoComponente',
    valueColumn: (element) => element.tipocomponente.tipoComponente,
    type: 'string'
  },
  {
    title: 'S/N',
    name: 'sn',
    valueColumn: (element) => element.sn,
    type: 'string'
  },
  {
    title: 'Cantidad',
    name: 'cantidad',
    valueColumn: (element) => element.cantidad,
    type: 'string'
  },
  {
    title: 'Lote',
    name: 'lote',
    valueColumn: (element) => element.lote,
    type: 'string'
  },
  {
    title: 'Estado',
    name: 'estado.estado',
    valueColumn: (element) => element.estado.estado,
    type: 'string'
  },
  {
    title: 'Vence en',
    name: 'venceEn',
    valueColumn: (element) => daysUntil(element.shelfLife),
    type: 'string'
  }
];