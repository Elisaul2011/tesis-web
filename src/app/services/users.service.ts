import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base_route } from '../../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  route_users = `${base_route}/users`;

  constructor(private httpClient: HttpClient) { }

  getUsers(): void {
    this.httpClient.get(this.route_users).subscribe(result => {
      console.log(result);
    })
  }

}
