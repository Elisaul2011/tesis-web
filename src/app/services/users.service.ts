import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { base_route } from '../../../enviroment';
import { IRoles, IUsers } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private route_users = `${base_route}/users`;
  private route_users_roles = `${this.route_users}/roles`;
  private setUserData = signal<IUsers[]>([]);
  private setUserRolesData = signal<IRoles[]>([]);
  public getUserData = computed<IUsers[]>(() => this.setUserData());
  public getUserRolsData = computed<IRoles[]>(() => this.setUserRolesData());

  constructor(private httpClient: HttpClient) { }

  getUsers(): void {
    this.httpClient.get<IUsers[]>(this.route_users).subscribe((result:any[])  => {
      result.map(user => {
        user.roles = user.roles.rol
      });
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
      console.log(result);
      if(result){
        this.getUsers();
      }
    })
  }

  putUsers(bodyUser: any): void {
    this.httpClient.put(this.route_users, bodyUser).subscribe(result => {
      console.log(result);
      if(result){
        this.getUsers();
      }
    })
  }

}

