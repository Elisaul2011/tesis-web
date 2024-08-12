export interface IMenu {
  title: string;
  redirect: string;
  icon: string;
  userRol?: Roles[];
}

export type Roles ='Almacenista' |'Inspector' |'Técnico' |'Jefe de almacén' |'Administrador';

export const menuLayout: IMenu[] = [
  {
    title: 'Orden de Compra',
    redirect: 'orden-compra',
    icon: 'receipt_long',
    userRol: ['Administrador','Almacenista', 'Jefe de almacén']
  },
  {
    title: 'Inventario',
    redirect: 'almacen',
    icon: 'warehouse',
    userRol: ['Administrador','Almacenista', 'Jefe de almacén']
  },
  {
    title: 'Inspección',
    redirect: 'inspeccion',
    icon: 'manage_search',
    userRol: ['Administrador','Inspector','Jefe de almacén']
  },
  {
    title: 'Necesidades Técnicas',
    redirect: 'necesidades-tecnicas',
    icon: 'construction',
    userRol: ['Administrador','Técnico']
  },
  {
    title: 'Orden de Trabajo',
    redirect: 'aeronave',
    icon: 'flight',
    userRol: ['Administrador','Técnico', 'Jefe de almacén']
  },
  {
    title: 'Orden de Taller',
    redirect: 'OT',
    icon: 'home_repair_service',
    userRol: ['Administrador','Técnico', 'Jefe de almacén']
  },
  {
    title: 'Almacenes',
    redirect: 'almacenes',
    icon: 'view_list',
    userRol: ['Administrador', 'Jefe de almacén']
  },
  {
    title: 'Zonas',
    redirect: 'zonas',
    icon: 'view_list',
    userRol: ['Administrador', 'Jefe de almacén']
  },
  {
    title: 'Reporte de ShelfLife',
    redirect: 'reporte-shelf-life',
    icon: 'receipt_long',
    userRol: ['Administrador','Jefe de almacén']
  },
  {
    title: 'Historial de Movimientos',
    redirect: 'historial',
    icon: 'history',
    userRol: ['Administrador', 'Jefe de almacén']
  },
  {
    title: 'Usuarios',
    redirect: 'users',
    icon: 'group',
    userRol: ['Administrador','Jefe de almacén']
  },
]
