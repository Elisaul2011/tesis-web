import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { IMenu, Roles, menuLayout } from './layout.data';
import { MatIconModule } from '@angular/material/icon';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, MatIconModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
  menuLayout: IMenu[] = menuLayout;
  userRol: Roles = 'Almacenista';
  close: boolean = false;
  styleMenu: string =
    'fixed hidden bg-blue-700 z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75';

  constructor(
    private router: Router,
    public breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    // this.menuLayout = menuLayout.filter(menu => menu.userRol?.includes(this.userRol));
  }

  mediaQuery() {
    this.breakpointObserver
      .observe(Breakpoints.Web || Breakpoints.Medium)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.styleMenu =
          'fixed hidden bg-blue-700 z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75';
        }
      });
  }

  openMenu(): void {
    this.close = !this.close;
    if (this.close) {
      this.styleMenu =
        'fixed z-20  bg-blue-700 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75';
    } else {
      this.styleMenu =
        'hidden z-20  bg-blue-700 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75';
    }
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}
