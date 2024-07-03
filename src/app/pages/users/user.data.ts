import { IColumns } from "../../interfaces/table.interface";

export interface IUserData {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  link: string;
}

export const columnsUser: IColumns[] = [
  {
    title: 'Nombre',
    name: 'name',
    type: 'string'
  },
  {
    title: 'Apellido',
    name: 'lastname',
    type: 'string'
  },
  {
    title: 'Correo',
    name: 'email',
    type: 'links'
  },
  {
    title: 'Telefono',
    name: 'phone',
    type: 'string'
  }
];

export const dataUser: IUserData[] =  [
  {
    name: "Carlos",
    lastname: "Rodríguez",
    email: "carlos@example.com",
    phone: "+58 412-123-4567",
    link: 'redirecciona'
  },
  {
    name: "Ana",
    lastname: "López",
    email: "ana@example.com",
    phone: "+58 414-987-6543",
    link: 'redirecciona'
  },
  {
    name: "Diego",
    lastname: "Martínez",
    email: "diego@example.com",
    phone: "+58 416-555-1234",
    link: 'redirecciona'
  },
  {
    name: "Laura",
    lastname: "García",
    email: "laura@example.com",
    phone: "+58 424-789-0123",
    link: 'redirecciona'
  },
  {
    name: "Andrés",
    lastname: "Fernández",
    email: "andres@example.com",
    phone: "+58 426-111-2222",
    link: 'redirecciona'
  },
  {
    name: "Valentina",
    lastname: "Pérez",
    email: "valentina@example.com",
    phone: "+58 412-333-4444",
    link: 'redirecciona'
  },
  {
    name: "Sofía",
    lastname: "Ramírez",
    email: "sofia@example.com",
    phone: "+58 414-555-6666",
    link: 'redirecciona'
  },
  {
    name: "Pedro",
    lastname: "Hernández",
    email: "pedro@example.com",
    phone: "+58 416-777-8888",
    link: ''
  },
  {
    name: "Isabella",
    lastname: "Chávez",
    email: "isabella@example.com",
    phone: "+58 424-999-0000",
    link: '/login'
  },
  {
    name: "Mateo",
    lastname: "Gómez",
    email: "mateo@example.com",
    phone: "+58 426-123-4567",
    link: 'redirecciona'
  },
];
