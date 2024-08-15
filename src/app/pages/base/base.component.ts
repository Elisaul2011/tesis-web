import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from '../../services/users.service';
import { IUsers } from '../../interfaces/users';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css',
})
export class BaseComponent {
  dialog = inject(MatDialog);
  userService = inject(UsersService);
  userToken: IUsers = this.userService.getUserToken();
}
