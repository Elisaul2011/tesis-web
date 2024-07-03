import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { IMenu, Roles, menuLayout } from './layout.data';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    MatIconModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {

  menuLayout: IMenu[] = menuLayout;
  userRol: Roles = 'Almacenista';

  constructor(
    private router: Router
  ){
  }

  ngOnInit(): void {
    // this.menuLayout = menuLayout.filter(menu => menu.userRol?.includes(this.userRol));
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

}
