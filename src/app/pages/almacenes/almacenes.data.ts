import { IAlmacenes } from "../../interfaces/almacenes";
import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IColumns } from "../../interfaces/table.interface";

export const columnsAlmacenes: IColumns[] = [
    {
        title: 'Nombre',
        name: 'nombre',
        type: 'string'
    },
    {
        title: 'Descripción',
        name: 'descripcion',
        type: 'string'
    },
    {
        title: 'Pais',
        name: 'pais',
        type: 'string'
    },
    {
        title: 'Ciudad',
        name: 'ciudad',
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
        label: 'Nombre',
        formControl: 'nameUser',
        value: '',
        required: true,
        typeInput: 'text'
    },
    {
        label: 'Descripción',
        formControl: 'lastnameUser',
        value: '',
        required: true,
        typeInput: 'text'
    },
    {
      label: 'Pais',
      formControl: 'lastnameUser',
      value: '',
      required: true,
      typeInput: 'text'
    },
    {
      label: 'Ciudad',
      formControl: 'lastnameUser',
      value: '',
      required: true,
      typeInput: 'text'
    },
];


export const formularioAlmacenes: IFormulario = {
    title: 'Formulario de usuarios',
    dataForm: dataFormAlmacenes
}

export const almacenes: IAlmacenes[] = [
  {
    id: 1,
    nombre: "Almacén de Zulia",
    descripcion: "Almacén ubicado en el estado Zulia",
    pais: "Venezuela",
    ciudad: "Zulia",
  },
  {
    id: 2,
    nombre: "Taller de Motores",
    descripcion: "Taller especializado en mantenimiento y reparación de motores de aeronaves",
    pais: "Venezuela",
    ciudad: "Zulia",
  },
  {
    id: 3,
    nombre: "Taller de Aviónicos",
    descripcion: "Taller dedicado a la instalación y mantenimiento de sistemas electrónicos y aviónicos en aeronaves",
    pais: "Venezuela",
    ciudad: "Zulia",
  },
];

