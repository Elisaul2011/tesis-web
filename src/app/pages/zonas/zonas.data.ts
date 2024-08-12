import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IZona } from "../../interfaces/inventario";
import { IColumns } from "../../interfaces/table.interface";

export const columnsZonas: IColumns<IZona>[] = [
  {
    title: 'Nombre',
    name: 'zona',
    valueColumn: (element: IZona) => element.zona,
    type: 'string'
  },
  {
    title: 'Descripción',
    name: 'descripcionZona',
    valueColumn: (element: IZona) => element.descripcionZona,
    type: 'string'
  },
  {
    title: 'Almacen',
    name: 'almacenId',
    valueColumn: (element: IZona) => element.almacenId,
    type: 'string'
  },
  {
    title: 'Editar',
    name: 'edit',
    valueColumn: () => '',
    type: 'icon',
    icon: 'edit',
    color: 'primary'
  },
  {
    title: 'Eliminar',
    name: 'delete',
    valueColumn: () => '',
    type: 'icon',
    icon: 'delete',
    color: 'warn'
  }
];

export const dataFormZona: IDataForm[] = [
  {
    label: 'Nombre',
    formControl: 'zona',
    value: '',
    required: true,
    typeInput: 'text',
    disabled: false
  },
  {
    label: 'Descripción',
    formControl: 'descripcionZona',
    value: '',
    required: true,
    typeInput: 'text',
    disabled: false
  },
  {
    label: 'Almacen',
    formControl: 'almacenId',
    value: '',
    required: true,
    typeInput: 'select',
    option: [],
    disabled: false
  },
];


export const formularioZona: IFormulario = {
  title: 'Registrar Almacen',
  dataForm: dataFormZona
}