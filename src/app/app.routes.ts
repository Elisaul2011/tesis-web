import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children: [
      {
        path:'users',
        component: UsersComponent
      },
      {
        path:'componentes',
        component: UsersComponent
      },
      {
        path:'componentes/:id',
        component: UsersComponent
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {path: '**',  redirectTo: ''}
];
