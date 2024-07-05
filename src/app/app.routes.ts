import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { AlmacenComponent } from './pages/almacen/almacen.component';

export const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children: [
      {
        path:'Almacen',
        component: AlmacenComponent
      },
      {
        path:'',
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
