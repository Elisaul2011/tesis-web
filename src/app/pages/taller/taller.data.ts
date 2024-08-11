import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IColumns } from "../../interfaces/table.interface";
import { ITaller } from "../../interfaces/taller";

export const columnsTaller: IColumns<any>[] = [
  {
    title: 'Taller',
    name: 'taller',
    valueColumn: () => '',
    type: 'string'
  },
  {
    title: 'P/N',
    name: 'pn',
    valueColumn: () => '',
    type: 'string'
  },
  {
    title: 'Descripción',
    name: 'descripcion',
    valueColumn: () => '',
    type: 'string'
  },
  {
    title: 'Tipo',
    name: 'tipo',
    valueColumn: () => '',
    type: 'string'
  },
  {
    title: 'S/N',
    name: 'sn',
    valueColumn: () => '',
    type: 'string'
  },
  {
    title: 'Cantidad',
    name: 'cantidad',
    valueColumn: () => '',
    type: 'string'
  },
  {
    title: 'Orden de Taller',
    name: 'workshopOrder',
    valueColumn: () => '',
    type: 'string'
  },
  {
    title: 'Editar',
    name: 'edit',
    valueColumn: () => '',
    type: 'icon',
    icon: 'edit'
  }
];

export const dataFormTaller: IDataForm[] = [
  {
    label: 'Fecha',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'Taller',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'Orden de Taller',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'Realizado por',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'select',
    option: [
      {
        label: 'Almacenista',
        value: 1
      }
    ]
  },
  //falta tabla de los componente seleccionados
];


export const formularioTaller: IFormulario = {
  title: 'Reparar Componente',
  dataForm: dataFormTaller
}

export const datosTaller: ITaller[] = [
  {
    id: 1,
    taller: "Taller del Zulia",
    pn: "ENG1234",
    descripcion: "Turbina de alto rendimiento",
    tipo: "Motor",
    sn: "TURB001",
    cantidad: 5,
    workshopOrder: "OT-1001",
  },
  {
    id: 2,
    taller: "Taller del Zulia",
    pn: "COMP5678",
    descripcion: "Válvula hidráulica",
    tipo: "Equipo",
    sn: "VALVE002",
    cantidad: 20,
    workshopOrder: "OT-1002",
  },
  {
    id: 3,
    taller: "Taller del Zulia",
    pn: "AVN9876",
    descripcion: "Sistema de navegación GPS",
    tipo: "Equipo",
    sn: "GPSNAV003",
    cantidad: 10,
    workshopOrder: "OT-1003",
  },
  {
    id: 4,
    taller: "Taller del Zulia",
    pn: "STR4567",
    descripcion: "Panel de ala",
    tipo: "Rotable",
    sn: "WINGPANEL004",
    cantidad: 15,
    workshopOrder: "OT-1004",
  },
  {
    id: 5,
    taller: "Taller del Zulia",
    pn: "ELEC7890",
    descripcion: "Generador eléctrico",
    tipo: "Equipo",
    sn: "GEN001",
    cantidad: 8,
    workshopOrder: "OT-1005",
  },
  {
    id: 6,
    taller: "Taller del Zulia",
    pn: "HYD2345",
    descripcion: "Bomba hidráulica",
    tipo: "Equipo",
    sn: "PUMP005",
    cantidad: 12,
    workshopOrder: "OT-1006",
  },
  {
    id: 7,
    taller: "Taller del Zulia",
    pn: "COMP6789",
    descripcion: "Actuador de tren de aterrizaje",
    tipo: "Equipo",
    sn: "ACTUATOR006",
    cantidad: 18,
    workshopOrder: "OT-1007",
  },
  {
    id: 8,
    taller: "Taller del Zulia",
    pn: "FUEL3456",
    descripcion: "Bomba de combustible",
    tipo: "Equipo",
    sn: "FUELPUMP007",
    cantidad: 6,
    workshopOrder: "OT-1008",
  },
  {
    id: 9,
    taller: "Taller del Zulia",
    pn: "COMP7890",
    descripcion: "Sensor de temperatura",
    tipo: "Equipo",
    sn: "TEMPSENSOR008",
    cantidad: 25,
    workshopOrder: "OT-1009",
  },
  {
    id: 10,
    taller: "Taller del Zulia",
    pn: "AVN1234",
    descripcion: "Computadora de vuelo",
    tipo: "Equipo",
    sn: "FLIGHTCOMP009",
    cantidad: 10,
    workshopOrder: "OT-1010",
  },
];
