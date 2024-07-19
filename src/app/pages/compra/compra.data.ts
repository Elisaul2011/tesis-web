import { ICompra } from "../../interfaces/compra";
import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IColumns } from "../../interfaces/table.interface";

export const columnsAlmacenes: IColumns[] = [
    {
        title: 'Item',
        name: 'item',
        type: 'string'
    },
    {
      title: 'P/N',
      name: 'pn',
      type: 'string'
    },
    {
        title: 'Descripción',
        name: 'descripcion',
        type: 'string'
    },
    {
        title: 'Cantidad',
        name: 'cantidad',
        type: 'string'
    },
    {
        title: 'Editar',
        name: 'edit',
        type: 'icon',
        icon: 'edit',
        color: 'primary'
    },
    {
      title: 'Eliminar',
      name: 'delete',
      type: 'icon',
      icon: 'delete',
      color: 'warn'
    }
];

export const dataFormAlmacenes: IDataForm[] = [
    {
        label: 'Item',
        formControl: 'item',
        value: '',
        required: true,
        typeInput: 'text'
    },
    {
        label: 'P/N',
        formControl: 'pn',
        value: '',
        required: true,
        typeInput: 'text'
    },
    {
      label: 'Descripción',
      formControl: 'descripcion',
      value: '',
      required: true,
      typeInput: 'text'
    },
    {
      label: 'Cantidad',
      formControl: 'cantidad',
      value: '',
      required: true,
      typeInput: 'text'
    },
];


export const formularioAlmacenes: IFormulario = {
    title: 'Formulario de usuarios',
    dataForm: dataFormAlmacenes
}

export const compras: ICompra[] = [
  {
    id: 1,
    item: 12345,
    pn: 'ABC123',
    descripcion: 'Tornillo de fijación',
    cantidad: 50,
  },
  {
    id: 2,
    item: 67890,
    pn: 'XYZ789',
    descripcion: 'Resorte de compresión',
    cantidad: 20,
  },
  {
    id: 3,
    item: 98765,
    pn: 'DEF456',
    descripcion: 'Válvula de escape',
    cantidad: 80,
  },
  {
    id: 10,
    item: 54321,
    pn: 'GHI987',
    descripcion: 'Sensor de temperatura',
    cantidad: 10,
  },
  {
    id: 4,
    item: 24680,
    pn: 'JKL321',
    descripcion: 'Cable eléctrico',
    cantidad: 30,
  },
  {
    id: 5,
    item: 13579,
    pn: 'MNO654',
    descripcion: 'Filtro de aire',
    cantidad: 70,
  },
  {
    id: 6,
    item: 11223,
    pn: 'PQR987',
    descripcion: 'Bombilla LED',
    cantidad: 5,
  },
  {
    id: 7,
    item: 99887,
    pn: 'STU246',
    descripcion: 'Engranaje de transmisión',
    cantidad: 90,
  },
  {
    id: 8,
    item: 76543,
    pn: 'VWX543',
    descripcion: 'Tubo flexible',
    cantidad: 15,
  },
  {
    id: 9,
    item: 43210,
    pn: 'YZA789',
    descripcion: 'Motor eléctrico',
    cantidad: 40,
  },
];
