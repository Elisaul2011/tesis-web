import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IInspeccion } from "../../interfaces/inspeccion";
import { IColumns } from "../../interfaces/table.interface";

export const columnsInspeccion: IColumns<any>[] = [
  {
    title: 'Ubicación',
    valueColumn: (element: any) => '',
    name: 'ubicacion',
    type: 'string'
  },
  {
    title: 'Zona',
    valueColumn: (element: any) => '',
    name: 'zona',
    type: 'string'
  },
  {
    title: 'P/N',
    valueColumn: (element: any) => '',
    name: 'pn',
    type: 'string'
  },
  {
    title: 'Descripción',
    valueColumn: (element: any) => '',
    name: 'descripcion',
    type: 'string',
  },
  {
    title: 'Tipo',
    valueColumn: (element: any) => '',
    name: 'tipo',
    type: 'string'
  },
  {
    title: 'S/N',
    valueColumn: (element: any) => '',
    name: 'sn',
    type: 'string'
  },
  {
    title: 'Cantidad',
    valueColumn: (element: any) => '',
    name: 'cantidad',
    type: 'string'
  },
  {
    title: 'Lote',
    valueColumn: (element: any) => '',
    name: 'lote',
    type: 'string'
  },
  {
    title: 'Estado',
    valueColumn: (element: any) => '',
    name: 'estado',
    type: 'string'
  },
];

export const dataFormInspeccion: IDataForm[] = [
  {
    label: 'Fecha',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'Aprobado',
    formControl: 'active',
    value: false,
    required: true,
    typeInput: 'boolean',
  },
  {
    label: 'Orden de Inspeccion',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'Inspeccionado por',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'select',
    option: []
  },
  //falta la tabla de los componentes selecionados
];


export const formularioInspeccion: IFormulario = {
  title: 'Aprobación de componentes',
  dataForm: dataFormInspeccion
}

export const inspeccion: IInspeccion[] = [
  {
    id: 1,
    ubicacion: "Almacén Principal",
    zona: "Estanque A",
    pn: "ABC123",
    descripcion: "Bomba hidráulica",
    tipo: "Equipo",
    sn: "BH-456",
    cantidad: 20,
    lote: "Lote-2023",
    estado: "Esperando por Inspección",
  },
  {
    id: 2,
    ubicacion: "Almacén de Repuestos",
    zona: "Estanque B",
    pn: "XYZ789",
    descripcion: "Válvula de control",
    tipo: "Rotable",
    sn: "VC-123",
    cantidad: 50,
    lote: "Lote-2024",
    estado: "Esperando por Inspección",
  },
  {
    id: 3,
    ubicacion: "Almacén de Componentes",
    zona: "Estanque C",
    pn: "DEF456",
    descripcion: "Sensor de temperatura",
    tipo: "Consumible",
    sn: "ST-789",
    cantidad: 30,
    lote: "Lote-2023",
    estado: "Esperando por Inspección",
  },
  {
    id: 4,
    ubicacion: "Almacén de Electrónica",
    zona: "Estanque D",
    pn: "GHI789",
    descripcion: "Circuito integrado",
    tipo: "Consumible Serializado",
    sn: "CI-123",
    cantidad: 10,
    lote: "Lote-2024",
    estado: "Esperando por Inspección",
  },
  {
    id: 5,
    ubicacion: "Almacén de Herramientas",
    zona: "Estanque E",
    pn: "JKL012",
    descripcion: "Llave inglesa",
    tipo: "Consumible",
    sn: "LI-456",
    cantidad: 40,
    lote: "Lote-2023",
    estado: "Esperando por Inspección",
  },
  {
    id: 6,
    ubicacion: "Almacén de Aviónica",
    zona: "Estanque F",
    pn: "MNO345",
    descripcion: "Radar altímetro",
    tipo: "Equipo",
    sn: "RA-789",
    cantidad: 15,
    lote: "Lote-2024",
    estado: "Esperando por Inspección",
  },
  {
    id: 7,
    ubicacion: "Almacén de Combustible",
    zona: "Estanque G",
    pn: "PQR678",
    descripcion: "Medidor de nivel",
    tipo: "Consumible",
    sn: "MN-012",
    cantidad: 25,
    lote: "Lote-2023",
    estado: "Esperando por Inspección",
  },
  {
    id: 8,
    ubicacion: "Almacén de Estructuras",
    zona: "Estanque H",
    pn: "STU901",
    descripcion: "Panel de aluminio",
    tipo: "Rotable",
    sn: "PA-345",
    cantidad: 12,
    lote: "Lote-2024",
    estado: "Esperando por Inspección",
  },
  {
    id: 9,
    ubicacion: "Almacén de Ropa de Vuelo",
    zona: "Estanque I",
    pn: "VWX234",
    descripcion: "Chaqueta de piloto",
    tipo: "Consumible",
    sn: "CP-678",
    cantidad: 35,
    lote: "Lote-2023",
    estado: "Esperando por Inspección",
  },
  {
    id: 10,
    ubicacion: "Almacén de Documentación",
    zona: "Estanque J",
    pn: "YZA567",
    descripcion: "Manual de mantenimiento",
    tipo: "Consumible",
    sn: "MM-901",
    cantidad: 18,
    lote: "Lote-2024",
    estado: "Esperando por Inspección",
  },
];
