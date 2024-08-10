import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { IMenu, Roles, menuLayout } from './layout.data';
import { MatIconModule } from '@angular/material/icon';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, MatIconModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
  menuLayout: IMenu[] = menuLayout;
  close: boolean = false;
  userService = inject(UsersService);
  styleMenu: string =
    'flex hidden bg-blue-700 z-20 h-full top-0 left-0 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75';

  constructor(
    private router: Router,
    public breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    const user = this.userService.getUserToken();
    if (user) {
      this.menuLayout = menuLayout.filter(menu => menu.userRol?.includes(user.roles.rol as Roles));
    } else {
      this.router.navigate(['/login']);
    }
  }

  mediaQuery() {
    this.breakpointObserver
      .observe(Breakpoints.Web || Breakpoints.Medium)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.styleMenu =
          'flex bg-blue-700 z-20 h-full overflow-y-auto flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75';
        }
      });
  }

  openMenu(): void {
    this.close = !this.close;
    if (this.close) {
      this.styleMenu =
        'flex z-20 bg-blue-700 h-full overflow-auto flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75';
    } else {
      this.styleMenu =
        'hidden z-20 bg-blue-700 h-full overflow-auto flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75';
    }
  }

  logout(): void {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
}
