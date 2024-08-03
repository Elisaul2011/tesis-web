import { IAlmacenes } from "../../interfaces/almacenes";
import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IColumns } from "../../interfaces/table.interface";

export const columnsAlmacenes: IColumns<IAlmacenes>[] = [
    {
        title: 'Nombre',
        name: 'nombre',
        valueColumn: (element: IAlmacenes) => element.nombre,
        type: 'string'
    },
    {
        title: 'Descripción',
        name: 'descripcion',
        valueColumn: (element: IAlmacenes) => element.descripcion,
        type: 'string'
    },
    {
        title: 'Pais',
        name: 'pais',
        valueColumn: (element: IAlmacenes) => element.pais,
        type: 'string'
    },
    {
        title: 'Ciudad',
        name: 'ciudad',
        valueColumn: (element: IAlmacenes) => element.ciudad,
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

export const dataFormAlmacenes: IDataForm[] = [
    {
        label: 'Ciudad',
        formControl: 'ciudad',
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
      label: 'Estado',
      formControl: 'estado',
      value: '',
      required: true,
      typeInput: 'number'
    },
    {
      label: 'Pais',
      formControl: 'pais',
      value: '',
      required: true,
      typeInput: 'text'
    },
    {
      label: 'Nombre',
      formControl: 'nombre',
      value: '',
      required: true,
      typeInput: 'text'
    },
    {
      label: 'Zona',
      formControl: 'zonaId',
      value: 0,
      required: true,
      typeInput: 'select',
      option: []
    }
];


export const formularioAlmacenes: IFormulario = {
    title: 'Formulario de usuarios',
    dataForm: dataFormAlmacenes
}

// export const almacenes: IAlmacenes[] = [
//   {
//     id: 1,
//     nombre: "Almacén de Zulia",
//     descripcion: "Almacén ubicado en el estado Zulia",
//     pais: "Venezuela",
//     ciudad: "Zulia",
//   },
//   {
//     id: 2,
//     nombre: "Taller de Motores",
//     descripcion: "Taller especializado en mantenimiento y reparación de motores de aeronaves",
//     pais: "Venezuela",
//     ciudad: "Zulia",
//   },
//   {
//     id: 3,
//     nombre: "Taller de Aviónicos",
//     descripcion: "Taller dedicado a la instalación y mantenimiento de sistemas electrónicos y aviónicos en aeronaves",
//     pais: "Venezuela",
//     ciudad: "Zulia",
//   },
// ];

