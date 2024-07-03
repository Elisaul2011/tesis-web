import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IColumns } from '../../interfaces/table.interface';
import { IUserData, columnsUser, dataUser } from './user.data';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  columnsUser: IColumns[] = columnsUser;
  dataUser: IUserData[] = dataUser;

}
