export interface IMenu {
  title: string;
  redirect: string;
  icon: string;
  userRol?: Roles[];
}

export type Roles = 'Almacenista' | 'Jefe de Almacen' | 'User';

export const menuLayout: IMenu[] = [
  {
    title: 'Inventario',
    redirect: 'inventario',
    icon: 'bolt',
    userRol: ['Almacenista', 'Jefe de Almacen']
  },
  {
    title: 'Aeronautica',
    redirect: 'aero',
    icon: 'bolt',
    userRol: ['Jefe de Almacen']
  },
  {
    title: 'Componentes',
    redirect: 'componentes',
    icon: 'bolt',
    userRol: ['Jefe de Almacen', 'User']
  },
  {
    title: 'Usuarios',
    redirect: 'users',
    icon: 'group',
    userRol: ['User']
  },
]
