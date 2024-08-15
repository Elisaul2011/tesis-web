export interface IMenu {
  title: string;
  redirect: string;
  icon: string;
  active: boolean;
  userRol?: Roles[];
}

export type Roles ='Almacenista' |'Inspector' |'Técnico' |'Jefe de almacén' |'Administrador';

export const menuLayout: IMenu[] = [
  {
    title: 'Orden de Compra',
    redirect: 'orden-compra',
    icon: 'receipt_long',
    active: false,
    userRol: ['Administrador','Almacenista', 'Jefe de almacén']
  },
  {
    title: 'Inventario',
    redirect: 'almacen',
    icon: 'warehouse',
    active: false,
    userRol: ['Administrador','Almacenista', 'Jefe de almacén']
  },
  {
    title: 'Inspección',
    redirect: 'inspeccion',
    icon: 'manage_search',
    active: false,
    userRol: ['Administrador','Inspector','Jefe de almacén']
  },
  {
    title: 'Necesidades Técnicas',
    redirect: 'necesidades-tecnicas',
    icon: 'construction',
    active: false,
    userRol: ['Administrador','Técnico']
  },
  {
    title: 'Orden de Trabajo',
    redirect: 'aeronave',
    icon: 'flight',
    active: false,
    userRol: ['Administrador','Técnico', 'Jefe de almacén']
  },
  {
    title: 'Orden de Taller',
    redirect: 'OT',
    icon: 'home_repair_service',
    active: false,
    userRol: ['Administrador','Técnico', 'Jefe de almacén']
  },
  {
    title: 'Notificaciones',
    redirect: 'notificaciones',
    icon: 'notifications',
    active: false,
    userRol: ['Almacenista']
  },
  {
    title: 'Almacenes',
    redirect: 'almacenes',
    icon: 'view_list',
    active: false,
    userRol: ['Administrador', 'Jefe de almacén']
  },
  {
    title: 'Zonas',
    redirect: 'zonas',
    icon: 'explore',
    active: false,
    userRol: ['Administrador', 'Jefe de almacén']
  },
  {
    title: 'Reporte de ShelfLife',
    redirect: 'reporte-shelf-life',
    icon: 'receipt_long',
    active: false,
    userRol: ['Administrador','Jefe de almacén']
  },
  {
    title: 'Historial de Movimientos',
    redirect: 'historial',
    icon: 'history',
    active: false,
    userRol: ['Administrador', 'Jefe de almacén']
  },
  {
    title: 'Usuarios',
    redirect: 'users',
    icon: 'group',
    active: false,
    userRol: ['Administrador','Jefe de almacén']
  },
]
