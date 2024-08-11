export interface IMenu {
  title: string;
  redirect: string;
  icon: string;
  userRol?: Roles[];
}

export type Roles = 'Almacenista' | 'Jefe de Almacen' | 'Tecnico' | 'Inspector' | 'Admin';

export const menuLayout: IMenu[] = [
  {
    title: 'Orden de compra',
    redirect: 'orden-compra',
    icon: 'receipt_long',
    userRol: ['Almacenista', 'Jefe de Almacen', 'Admin']
  },
  {
    title: 'Inventario',
    redirect: 'almacen',
    icon: 'warehouse',
    userRol: ['Almacenista', 'Jefe de Almacen', 'Admin']
  },
  {
    title: 'Inspección',
    redirect: 'inspeccion',
    icon: 'manage_search',
    userRol: ['Inspector', 'Jefe de Almacen', 'Admin']
  },
  {
    title: 'Necesidades técnicas',
    redirect: 'necesidades-tecnicas',
    icon: 'construction',
    userRol: ['Tecnico', 'Admin']
  },
  {
    title: 'Ordenes de Trabajo',
    redirect: 'aeronave',
    icon: 'flight',
    userRol: ['Tecnico', 'Jefe de Almacen', 'Admin']
  },
  {
    title: 'Ordenes de Taller',
    redirect: 'OT',
    icon: 'home_repair_service',
    userRol: ['Tecnico', 'Jefe de Almacen', 'Admin']
  },
  {
    title: 'Almacenes',
    redirect: 'almacenes',
    icon: 'view_list',
    userRol: ['Jefe de Almacen', 'Admin']
  },
  {
    title: 'Historial de movimientos',
    redirect: 'historial',
    icon: 'history',
    userRol: ['Jefe de Almacen', 'Admin']
  },
  {
    title: 'Reporte de ShelfLife',
    redirect: 'reporte-shelf-life',
    icon: 'receipt_long',
    userRol: ['Jefe de Almacen', 'Admin']
  },
  {
    title: 'Usuarios',
    redirect: 'users',
    icon: 'group',
    userRol: ['Jefe de Almacen', 'Admin']
  },
]
