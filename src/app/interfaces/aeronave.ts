export interface IAeronave {
  idUser:       number;
  nameUser:     string;
  lastnameUser: string;
  rolId:        number;
  password:     string;
  roles:        string;
}

export interface Roles {
  idRol: number;
  rol:   string;
}
