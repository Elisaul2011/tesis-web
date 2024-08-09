import { IInventario } from "../../interfaces/inventario";
import { IDataForm, IFormulario } from "../../interfaces/fromulario.interface";
import { IColumns } from "../../interfaces/table.interface";

export const columnsInventario: IColumns<IInventario>[] = [
  {
    title: 'Ubicación',
    name: 'almacenes.nombre',
    valueColumn: (element) => element.almacenes.nombre,
    type: 'string'
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
    type: 'string',
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
    title: 'Shelf Lite',
    name: 'shelfLife',
    valueColumn: (element) => element.shelfLife,
    type: 'date'
  },
  {
    title: '# Order',
    name: 'order',
    valueColumn: (element) => element.order,
    type: 'string'
  },
  {
    title: 'Editar',
    name: 'edit',
    valueColumn: () => 'edit',
    type: 'icon',
    icon: 'edit',
    color: 'primary'
  }
  // {
  //   title: 'Eliminar',
  //   name: 'delete',
  //   valueColumn: () => 'delete',
  //   type: 'icon',
  //   icon: 'delete',
  //   color: 'warn'
  // }
];

export const dataFormAlmacen: IDataForm[] = [
  {
    label: 'Ubicación',
    formControl: 'almacenesId',
    value: '',
    required: true,
    typeInput: 'select',
    option: [],
    main: true
  },
  {
    label: 'Zona',
    formControl: 'zonaId',
    value: '',
    required: true,
    typeInput: 'select',
    option: [],
    detectChange: true
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
    label: 'ATA',
    formControl: 'atas',
    value: '',
    required: true,
    typeInput: 'select',
    option: []
  },
  {
    label: 'Fabricante',
    formControl: 'fabricante',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'Costo Unitario',
    formControl: 'cantidad',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'Lote',
    formControl: 'lote',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'Tipo de componente',
    formControl: 'tipoComponenteId',
    value: 0,
    required: true,
    typeInput: 'select',
    option: []
  },
  {
    label: 'S/N',
    formControl: 'sn',
    value: '',
    required: true,
    typeInput: 'text'
  },
  {
    label: 'Fecha de Shelf Life',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'text'
  },
];

export const dataFormAsignar: IDataForm[] = [
  {
    label: 'Asignar Order',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'select',
    option: [],
    main: true
  },
  {
    label: '#Order',
    formControl: '',
    value: '',
    required: true,
    typeInput: 'text',
  },

];

//Una vez ingresado el componente, este queda por defecto en estado "esperando por inspeccion"


export const formularioInventario: IFormulario = {
  title: 'Registrar nuevo componente',
  dataForm: dataFormAlmacen
}

export const formularioAsignar: IFormulario = {
  title: 'Asignar Orden',
  dataForm: dataFormAlmacen
}
// export const inventario: IInventario[] = [
//   {
//     id: 1,
//     ubicacion: 'Almacén A',
//     zona: 'Estante 1',
//     pn: 'ABC123',
//     descripción: 'Tornillo de fijación',
//     tipo: 'equipo',
//     sn: 'SN12345',
//     cantidad: 20,
//     lote: 'Lote-001',
//     estado: 'serviceable',
//     sl: '2024-12-31',
//     order: 'WO-123',
//   },
//   {
//     id: 2,
//     ubicacion: 'Almacén B',
//     zona: 'Estante 2',
//     pn: 'XYZ789',
//     descripción: 'Resorte de compresión',
//     tipo: 'rotable',
//     sn: 'SN67890',
//     cantidad: 10,
//     lote: 'Lote-002',
//     estado: 'en espera de inspección',
//     sl: '2025-01-15',
//     order: 'OT-456',
//   },
//   {
//     id: 3,
//     ubicacion: 'Almacén C',
//     zona: 'Estante 3',
//     pn: 'DEF456',
//     descripción: 'Válvula de escape',
//     tipo: 'Motor',
//     sn: 'SN98765',
//     cantidad: 30,
//     lote: 'Lote-003',
//     estado: 'en cuarentena',
//     sl: '2024-11-30',
//     order: 'INSP-789',
//   },
//   {
//     id: 4,
//     ubicacion: 'Almacén D',
//     zona: 'Estante 4',
//     pn: 'GHI987',
//     descripción: 'Sensor de temperatura',
//     tipo: 'rotable',
//     sn: 'SN54321',
//     cantidad: 5,
//     lote: 'Lote-004',
//     estado: 'en espera de inspección',
//     sl: '2024-12-15',
//     order: 'OT-789',
//   },
//   {
//     id: 5,
//     ubicacion: 'Almacén E',
//     zona: 'Estante 5',
//     pn: 'JKL321',
//     descripción: 'Cable eléctrico',
//     tipo: 'equipo',
//     sn: 'SN24680',
//     cantidad: 40,
//     lote: 'Lote-005',
//     estado: 'serviceable',
//     sl: '2025-02-28',
//     order: 'WO-456',
//   },
//   {
//     id: 6,
//     ubicacion: 'Almacén F',
//     zona: 'Estante 6',
//     pn: 'MNO654',
//     descripción: 'Filtro de aire',
//     tipo: 'Motor',
//     sn: 'SN13579',
//     cantidad: 25,
//     lote: 'Lote-006',
//     estado: 'en cuarentena',
//     sl: '2024-11-20',
//     order: 'INSP-012',
//   },
//   {
//     id: 7,
//     ubicacion: 'Almacén G',
//     zona: 'Estante 7',
//     pn: 'PQR987',
//     descripción: 'Bombilla LED',
//     tipo: 'rotable',
//     sn: 'SN11223',
//     cantidad: 15,
//     lote: 'Lote-007',
//     estado: 'serviceable',
//     sl: '2024-12-10',
//     order: 'WO-789',
//   },
//   {
//     id: 8,
//     ubicacion: 'Almacén H',
//     zona: 'Estante 8',
//     pn: 'STU246',
//     descripción: 'Engranaje de transmisión',
//     tipo: 'equipo',
//     sn: 'SN99887',
//     cantidad: 35,
//     lote: 'Lote-008',
//     estado: 'serviceable',
//     sl: '2025-03-15',
//     order: 'WO-012',
//   },
//   {
//     id: 9,
//     ubicacion: 'Almacén I',
//     zona: 'Estante 9',
//     pn: 'VWX543',
//     descripción: 'Tubo flexible',
//     tipo: 'rotable',
//     sn: 'SN76543',
//     cantidad: 10,
//     lote: 'Lote-009',
//     estado: 'en espera de inspección',
//     sl: '2024-12-05',
//     order: 'OT-012',
//   },
//   {
//     id: 10,
//     ubicacion: 'Almacén J',
//     zona: 'Estante 10',
//     pn: 'YZA789',
//     descripción: 'Motor eléctrico',
//     tipo: 'Motor',
//     sn: 'SN43210',
//     cantidad: 30,
//     lote: 'Lote-010',
//     estado: 'serviceable',
//     sl: '2025-01-31',
//     order: 'INSP-345',
//   },
// ];
