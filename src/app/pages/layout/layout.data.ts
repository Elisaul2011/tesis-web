export interface IMenu {
  title: string;
  redirect: string;
  icon: string;
  userRol?: Roles[];
}

export type Roles = 'Almacenista' | 'Jefe de Almacen' | 'User';

export const menuLayout: IMenu[] = [
  {
    title: 'Almacen',
    redirect: 'almacen',
    icon: 'warehouse',
    userRol: ['Almacenista', 'Jefe de Almacen']
  },
  {
    title: 'Aeronave',
    redirect: 'aeronave',
    icon: 'flight',
    userRol: ['Almacenista', 'Jefe de Almacen']
  },
  {
    title: 'Taller de reparación',
    redirect: 'OT',
    icon: 'home_repair_service',
    userRol: ['Almacenista', 'Jefe de Almacen']
  },
  {
    title: 'Almacenes',
    redirect: 'almacenes',
    icon: 'view_list',
    userRol: ['Almacenista', 'Jefe de Almacen']
  },
  {
    title: 'Inspección',
    redirect: 'inspeccion',
    icon: 'manage_search',
    userRol: ['Jefe de Almacen']
  },
  {
    title: 'Prestamo',
    redirect: 'prestamo',
    icon: 'handshake',
    userRol: ['Jefe de Almacen', 'User']
  },
  {
    title: 'Descartar',
    redirect: 'descartar',
    icon: 'delete',
    userRol: ['Almacenista', 'Jefe de Almacen']
  },
  {
    title: 'Historial de movimientos',
    redirect: 'historial',
    icon: 'history',
    userRol: ['Almacenista', 'Jefe de Almacen']
  },
  {
    title: 'Catalogo de Componente',
    redirect: 'catalogo',
    icon: 'settings',
    userRol: ['Almacenista', 'Jefe de Almacen']
  },
  {
    title: 'Personal',
    redirect: 'users',
    icon: 'group',
    userRol: ['User']
  },
]
