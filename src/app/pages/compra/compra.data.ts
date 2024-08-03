import { ICompra } from "../../interfaces/compra";
import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IColumns } from "../../interfaces/table.interface";

export const columnsCompra: IColumns<ICompra>[] = [
    {
      title: 'Orden de compra',
      name: 'orden',
        valueColumn: (element: ICompra) => element.ordenCompra,
      type: 'string'
    },
    {
      title: 'Fecha',
      name: 'fecha',
        valueColumn: (element: ICompra) => element.Fecha,
      type: 'string'
    },
    {
      title: 'P/N',
      name: 'pn',
        valueColumn: (element: ICompra) => element.pn,
      type: 'string'
    },
    {
      title: 'Descripción',
      name: 'descripcion',
        valueColumn: (element: ICompra) => element.descripcion,
      type: 'string'
    },
    {
      title: 'Cantidad',
      name: 'cantidad',
        valueColumn: (element: ICompra) => element.cantidad,
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

export const dataFormCompra: IDataForm[] = [
    {
      label: 'Orden de compra',
      formControl: 'orden',
      value: '',
      required: true,
      typeInput: 'text'
    },
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


export const formularioCompra: IFormulario = {
    title: 'Orden de compra',
    dataForm: dataFormCompra
}

export const compras: ICompra[] = [
  // {
  //   id: 1,
  //   ordenCompra: 'OP-001',
  //   fecha: ,
  //   pn: 'ABC123',
  //   descripcion: 'Tornillo de fijación',
  //   cantidad: 50,
  // },
  // {
  //   id: 2,
  //   ordenCompra: 'OP-001',
  //   fecha: '',
  //   pn: 'XYZ789',
  //   descripcion: 'Resorte de compresión',
  //   cantidad: 20,
  // },
  // {
  //   id: 3,
  //   ordenCompra: 'OP-001',
  //   fecha: '',
  //   pn: 'DEF456',
  //   descripcion: 'Válvula de escape',
  //   cantidad: 80,
  // },
  // {
  //   id: 10,
  //   ordenCompra: 'OP-001',
  //   fecha: '',
  //   pn: 'GHI987',
  //   descripcion: 'Sensor de temperatura',
  //   cantidad: 10,
  // },
  // {
  //   id: 4,
  //   ordenCompra: 'OP-001',
  //   fecha: '',
  //   pn: 'JKL321',
  //   descripcion: 'Cable eléctrico',
  //   cantidad: 30,
  // },
  // {
  //   id: 5,
  //   ordenCompra: 'OP-001',
  //   fecha: '',
  //   pn: 'MNO654',
  //   descripcion: 'Filtro de aire',
  //   cantidad: 70,
  // },
  // {
  //   id: 6,
  //   ordenCompra: 'OP-001',
  //   fecha: '',
  //   pn: 'PQR987',
  //   descripcion: 'Bombilla LED',
  //   cantidad: 5,
  // },
  // {
  //   id: 7,
  //   ordenCompra: 'OP-001',
  //   fecha: '',
  //   pn: 'STU246',
  //   descripcion: 'Engranaje de transmisión',
  //   cantidad: 90,
  // },
  // {
  //   id: 8,
  //   ordenCompra: 'OP-001',
  //   fecha: '',
  //   pn: 'VWX543',
  //   descripcion: 'Tubo flexible',
  //   cantidad: 15,
  // },
  // {
  //   id: 9,
  //   ordenCompra: 'OP-001',
  //   fecha: '',
  //   pn: 'YZA789',
  //   descripcion: 'Motor eléctrico',
  //   cantidad: 40,
  // },
];
