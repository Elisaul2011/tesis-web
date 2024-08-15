import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ILogin, IResponseLogin } from '../interfaces/users';
import { base_route } from '../../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  postAuthenticade(userLogin: ILogin): void {
    this.httpClient.post<IResponseLogin>(`${base_route}/auth/login`, userLogin).subscribe((response: IResponseLogin) => {
      if(response.success){
        localStorage.setItem('userToken', JSON.stringify(response.userToken));
        this.router.navigate(['/']);
      }
    })
  }
}
