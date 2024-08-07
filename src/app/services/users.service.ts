import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { base_route } from '../../../enviroment';
import { IRoles, IUsers } from '../interfaces/users';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService {

  //rutas del api
  private route_users = `${base_route}/users`;
  private route_users_roles = `${this.route_users}/roles`;

  //Los signals o variables a guardar los datos
  private setUserData = signal<IUsers[]>([]);
  private setUserRolesData = signal<IRoles[]>([]);
  public getUserData = computed<IUsers[]>(() => this.setUserData());
  public getUserRolsData = computed<IRoles[]>(() => this.setUserRolesData());

  // constructor(private httpClient: HttpClient) { }

  getUserToken(): IUsers {
    return JSON.parse(localStorage.getItem('userToken') as string);
  }

  getUsers(): void {
    this.httpClient.get<IUsers[]>(this.route_users).subscribe((result:IUsers[])  => {
      this.setUserData.set(result);
    })
  }

  getUsersRoles(): void {
    this.httpClient.get<IRoles[]>(this.route_users_roles).subscribe((result:IRoles[])  => {
      this.setUserRolesData.set(result);
    })
  }

  postUsers(bodyUser: any): void {
    this.httpClient.post(this.route_users, bodyUser).subscribe(result => {
       
      if(result){
        this.getUsers();
      }
    })
  }

  putUsers(bodyUser: any): void {
    this.httpClient.put(this.route_users, bodyUser).subscribe(result => {
       
      if(result){
        this.getUsers();
      }
    })
  }

  deleteUsers(id: string): void {
    this.httpClient.delete(`${this.route_users}/${id}`).subscribe(result => {
       
      if(result){
        this.getUsers();
      }
    })
  }

}

