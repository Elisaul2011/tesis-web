import { CommonModule } from '@angular/common';
import { Component, OnInit, effect, inject } from '@angular/core';
import { IColumns, IConfigTable } from '../../interfaces/table.interface';
import { columnsHistorial } from './historial.data';
import { TableComponent } from '../../components/table/table.component';
import { UsersService } from '../../services/users.service';
import { IRoles, IUsers } from '../../interfaces/users';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { IHistorial } from '../../interfaces/historial';
@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    MatButtonModule
  ],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css',
})
export class HistorialComponent {
  columnsHistorial: IColumns<any>[] = columnsHistorial;
  dataHistorial: IHistorial[] = [];
  historialConfigTable: IConfigTable={btnAdd: false}
  userService = inject(UsersService);
  dialog = inject(MatDialog);

  constructor(){
    effect(() => {
    })
  }

  ngOnInit(): void {
  }

}

