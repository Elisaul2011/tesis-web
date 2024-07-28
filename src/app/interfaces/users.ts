export interface IUsers {
  idUser:       number;
  nameUser:     string;
  lastnameUser: string;
  rolId:        number;
  password:     string;
  active:       boolean;
  roles:        string;
}

export interface Roles {
  idRol: number;
  rol:   string;
}


export interface IRoles {
  idRol: number;
  rol:   string;
}
