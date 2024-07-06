import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { AlmacenComponent } from './pages/almacen/almacen.component';
import { AeronaveComponent } from './pages/aeronave/aeronave.component';
import { TallerComponent } from './pages/taller/taller.component';
import { AlmacenesComponent } from './pages/almacenes/almacenes.component';
import { InspeccionComponent } from './pages/inspeccion/inspeccion.component';
import { PrestamoComponent } from './pages/prestamo/prestamo.component';
import { DescartarComponent } from './pages/descartar/descartar.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';

export const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children: [
      {
        path:'almacen',
        component: AlmacenComponent
      },
      {
        path:'aeronave',
        component: AeronaveComponent
      },
      {
        path:'OT',
        component: TallerComponent
      },
      {
        path:'almacenes',
        component: AlmacenesComponent
      },
      {
        path:'inspeccion',
        component: InspeccionComponent
      },
      {
        path:'prestamo',
        component: PrestamoComponent
      },
      {
        path:'descartar',
        component: DescartarComponent
      },
      {
        path:'historial',
        component: HistorialComponent
      },
      {
        path:'catalogo',
        component: CatalogoComponent
      },
      {
        path:'users',
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
