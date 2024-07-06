import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { base_route } from '../../../enviroment';
import { IUsers } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class aeronaveService {

  private route_users = `${base_route}/users`;
  private setUserData = signal<IUsers[]>([]);
  public getUserData = computed<IUsers[]>(() => this.setUserData());

  constructor(private httpClient: HttpClient) { }

  getUsers(): void {
    this.httpClient.get<IUsers[]>(this.route_users).subscribe((result:any[])  => {
      result.map(user => {
        user.roles = user.roles.rol
      });

      this.setUserData.set(result);
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
