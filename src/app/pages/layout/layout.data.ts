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
    icon: 'bolt',
    userRol: ['Almacenista', 'Jefe de Almacen']
  },
  {
    title: 'Aeronave',
    redirect: 'aeronave',
    icon: 'bolt',
    userRol: ['Almacenista', 'Jefe de Almacen']
  },
  {
    title: 'Taller de reparación',
    redirect: 'OT',
    icon: 'bolt',
    userRol: ['Almacenista', 'Jefe de Almacen']
  },
  {
    title: 'Almacenes',
    redirect: 'almacenes',
    icon: 'bolt',
    userRol: ['Almacenista', 'Jefe de Almacen']
  },
  {
    title: 'Inspección de componente',
    redirect: 'inspeccion',
    icon: 'bolt',
    userRol: ['Jefe de Almacen']
  },
  {
    title: 'Prestamo',
    redirect: 'prestamo',
    icon: 'bolt',
    userRol: ['Jefe de Almacen', 'User']
  },
  {
    title: 'Desecho',
    redirect: 'desecho',
    icon: 'bolt',
    userRol: ['Almacenista', 'Jefe de Almacen']
  },
  {
    title: 'Historial de movimientos',
    redirect: 'historial',
    icon: 'bolt',
    userRol: ['Almacenista', 'Jefe de Almacen']
  },
  {
    title: 'Catalogo de Componente',
    redirect: 'catalogo',
    icon: 'bolt',
    userRol: ['Almacenista', 'Jefe de Almacen']
  },
  {
    title: 'Personal',
    redirect: 'users',
    icon: 'group',
    userRol: ['User']
  },
]
