import { BaseResponse } from "./base.interface";

export interface IUsers {
  idUser:       number;
  nameUser:     string;
  lastnameUser: string;
  rolId:        number;
  active:       boolean;
  password:     string;
  roles:        IRoles;
}

export interface IRoles {
  idRol: number;
  rol:   string;
}

export interface ILogin{
  nameUser: string;
  password: string;
}

export interface IResponseLogin extends BaseResponse {
  userToken: IUsers
}


export interface IBodyCreateUser {
  nameUser: string;
  lastnameUser: string;
  password: string;
  rolId: number;
  active: boolean;
}

export interface IBodyUpdateUser extends IBodyCreateUser{
  idUser: number
}