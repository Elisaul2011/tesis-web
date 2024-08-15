export interface INotificaciones {
    idNotificacion: number;
    pn:             string;
    descripcion:    string;
    cantidad:       number;
    sendBy:         number;
    sendTo:         number;
    userAlmacen:    User;
    userSolitited:  User;
}

export interface User {
    idUser:       number;
    nameUser:     string;
    lastnameUser: string;
    rolId:        number;
    active:       boolean;
    password:     string;
}
