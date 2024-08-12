import { IAeronave } from "../../interfaces/aeronave";
import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IColumns } from "../../interfaces/table.interface";

export const columnsAeronave: IColumns<IAeronave>[] = [
  {
    title: 'Aeronave',
    name: 'aeronave',
    valueColumn: (element) => element.aeronave,
    type: 'string'
  },
  {
    title: 'P/N',
    name: 'inventario.pn',
    valueColumn: (element) => element.inventario.pn,
    type: 'string'
  },
  {
    title: 'Descripción',
    name: 'inventario.descripcion',
    valueColumn: (element) => element.inventario.descripcion,
    type: 'string'
  },
  {
    title: 'Tipo',
    name: 'inventario.tipocomponente.tipoComponente',
    valueColumn: (element) => element.inventario.tipocomponente.tipoComponente,
    type: 'string'
  },
  {
    title: 'S/N',
    name: 'inventario.sn',
    valueColumn: (element) => element.inventario.sn,
    type: 'string'
  },
  {
    title: 'Cantidad',
    name: 'inventario.cantidad',
    valueColumn: (element) => element.inventario.cantidad,
    type: 'string'
  },
  {
    title: 'Orden de Trabajo',
    name: 'inventario.order',
    valueColumn: (element) => element.inventario.order,
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

// export const columnsAeronave: IColumns<IAeronave>[] = [
//   {
//     title: 'Aeronave',
//     name: 'aeronave',
//     valueColumn: (elementelement) => element.,
//     type: 'string'
//   },
//   {
//     title: 'P/N',
//     name: 'pn',
//       valueColumn: (element) => element.,
//     type: 'string'
//   },
//   {
//     title: 'Descripción',
//     name: 'descripcion',
//       valueColumn: (element) => element.,
//     type: 'string'
//   },
//   {
//     title: 'Tipo',
//     name: 'tipo',
//       valueColumn: (element) => element.,
//     type: 'string'
//   },
//   {
//     title: 'S/N',
//     name: 'sn',
//       valueColumn: (element) => element.,
//     type: 'string'
//   },
//   {
//     title: 'Cantidad',
//     name: 'cantidad',
//       valueColumn: (element) => element.,
//     type: 'string'
//   },
//   {
//     title: 'Work Order',
//     name: 'order',
//       valueColumn: (element) => element.,
//     type: 'string'
//   },
//   {
//     title: 'Editar',
//     name: 'edit',
//       valueColumn: (element) => element.,
//     type: 'icon',
//     icon: 'edit'
//   }
// ];


export const dataFormAeronave: IDataForm[] = [
  {
    label: 'Fecha',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'Aeronave',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'Orden de trabajo',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'select',
    option: [
      {
        label: 'Técnico',
        value: 3
      }
    ]
  },
  {
    label: 'Realizado por',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'select',
    option: [
      {
        label: 'Técnico',
        value: 3
      }
    ]
  },
  //falta la tabla de componentes seleccionadas
];


export const formularioAeronave: IFormulario = {
  title: 'Instalar Componente',
  dataForm: dataFormAeronave
}

// export const aeronave: IAeronave[] = [
//   {
//     id: 1,
//     aeronave: "A320",
//     pn: "A320-1234",
//     descripcion: "Motor de ala izquierda",
//     tipo: "Equipo",
//     sn: "ENG-5678",
//     cantidad: 15,
//     order: "WO-1001",
//   },
//   {
//     id: 2,
//     aeronave: "B737",
//     pn: "B737-5678",
//     descripcion: "Sensor de temperatura",
//     tipo: "Consumible",
//     sn: "SEN-9876",
//     cantidad: 50,
//     order: "WO-1002",
//   },
//   {
//     id: 3,
//     aeronave: "A380",
//     pn: "A380-7890",
//     descripcion: "Bomba hidráulica",
//     tipo: "Rotable",
//     sn: "PUMP-5432",
//     cantidad: 20,
//     order: "WO-1003",
//   },
//   {
//     id: 4,
//     aeronave: "B747",
//     pn: "B747-4321",
//     descripcion: "Válvula de combustible",
//     tipo: "Equipo",
//     sn: "VALVE-8765",
//     cantidad: 10,
//     order: "WO-1004",
//   },
//   {
//     id: 5,
//     aeronave: "A330",
//     pn: "A330-2468",
//     descripcion: "Filtro de aire",
//     tipo: "Consumible",
//     sn: "FILTER-1357",
//     cantidad: 30,
//     order: "WO-1005",
//   },
//   {
//     id: 6,
//     aeronave: "B777",
//     pn: "B777-9876",
//     descripcion: "Actuador de tren de aterrizaje",
//     tipo: "Rotable",
//     sn: "ACTUATOR-2468",
//     cantidad: 25,
//     order: "WO-1006",
//   },
//   {
//     id: 7,
//     aeronave: "A340",
//     pn: "A340-5432",
//     descripcion: "Panel de control electrónico",
//     tipo: "Equipo",
//     sn: "PANEL-7890",
//     cantidad: 12,
//     order: "WO-1007",
//   },
//   {
//     id: 8,
//     aeronave: "B787",
//     pn: "B787-1357",
//     descripcion: "Sensor de presión",
//     tipo: "Consumible",
//     sn: "SENSOR-4321",
//     cantidad: 40,
//     order: "WO-1008",
//   },
//   {
//     id: 9,
//     aeronave: "A310",
//     pn: "A310-8765",
//     descripcion: "Bombilla de iluminación",
//     tipo: "Rotable",
//     sn: "BULB-5678",
//     cantidad: 18,
//     order: "WO-1009",
//   },
//   {
//     id: 10,
//     aeronave: "B767",
//     pn: "B767-1357",
//     descripcion: "Cableado eléctrico",
//     tipo: "Equipo",
//     sn: "WIRE-9876",
//     cantidad: 8,
//     order: "WO-1010",
//   },
// ];
