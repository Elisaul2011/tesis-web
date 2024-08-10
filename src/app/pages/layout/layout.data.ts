export interface IMenu {
  title: string;
  redirect: string;
  icon: string;
  userRol?: Roles[];
}

export type Roles ='Almacenista' |'Inspector' |'Técnico' |'Jefe de almacén' |'Administrador';

export const menuLayout: IMenu[] = [
  {
    title: 'Inventario',
    redirect: 'almacen',
    icon: 'warehouse',
    userRol: ['Administrador','Almacenista', 'Jefe de almacén']
  },
  {
    title: 'Aeronave',
    redirect: 'aeronave',
    icon: 'flight',
    userRol: ['Administrador','Almacenista', 'Jefe de almacén']
  },
  {
    title: 'Taller de reparación',
    redirect: 'OT',
    icon: 'home_repair_service',
    userRol: ['Administrador','Almacenista', 'Jefe de almacén']
  },
  {
    title: 'Almacenes',
    redirect: 'almacenes',
    icon: 'view_list',
    userRol: ['Administrador','Almacenista', 'Jefe de almacén']
  },
  {
    title: 'Inspección',
    redirect: 'inspeccion',
    icon: 'manage_search',
    userRol: ['Administrador','Jefe de almacén']
  },

  {
    title: 'Historial de movimientos',
    redirect: 'historial',
    icon: 'history',
    userRol: ['Administrador','Almacenista', 'Jefe de almacén']
  },
  {
    title: 'Personal',
    redirect: 'users',
    icon: 'group',
    userRol: ['Administrador','Almacenista']
  },
  {
    title: 'Necesidades técnicas',
    redirect: 'necesidades-tecnicas',
    icon: 'construction',
    userRol: ['Administrador','Almacenista']
  },
  {
    title: 'Orden de compra',
    redirect: 'orden-compra',
    icon: 'receipt_long',
    userRol: ['Administrador','Almacenista']
  },
  {
    title: 'Reporte de ShelfLife',
    redirect: 'reporte-shelf-life',
    icon: 'receipt_long',
    userRol: ['Administrador','Almacenista']
  },
]
