import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  public httpClient = inject(HttpClient);
  public router = inject(Router);

}
