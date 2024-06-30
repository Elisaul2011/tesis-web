import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { LayoutComponent } from './pages/layout/layout.component';

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
        path:'users2',
        component: UsersComponent
      },
    ]
  },
  {
    path: 'login',
    component: UsersComponent
  },
  {path: '**',  redirectTo: ''}
];
