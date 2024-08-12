import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { AeronaveComponent } from './pages/aeronave/aeronave.component';
import { TallerComponent } from './pages/taller/taller.component';
import { AlmacenesComponent } from './pages/almacenes/almacenes.component';
import { InspeccionComponent } from './pages/inspeccion/inspeccion.component';


import { HistorialComponent } from './pages/historial/historial.component';
import { CompraComponent } from './pages/compra/compra.component';
import { NecesidadesComponent } from './pages/necesidades/necesidades.component';
import { ShelfLifeComponent } from './pages/shelfLife/shelfLife.component';
import { ZonasComponent } from './pages/zonas/zonas.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'',
    component: LayoutComponent,
    children: [
      {
        path:'almacen',
        component: InventarioComponent
      },
      {
        path:'zonas',
        component: ZonasComponent
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
        path:'historial',
        component: HistorialComponent
      },
      {
        path:'users',
        component: UsersComponent
      },
      {
        path:'necesidades-tecnicas',
        component: NecesidadesComponent
      },
      {
        path:'orden-compra',
        component: CompraComponent
      },
      {
        path:'reporte-shelf-life',
        component: ShelfLifeComponent
      },
    ]
  },
  {path: '**',  redirectTo: ''}
];
