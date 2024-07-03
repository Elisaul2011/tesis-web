import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IColumns } from '../../interfaces/table.interface';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    RouterLink
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit, AfterViewInit{

  @Input() columns: IColumns[] = [];
  @Input() dataTable: any[] = [];

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(col => col.name);
    this.dataSource = new MatTableDataSource(this.dataTable);
  }

  redirectLink(rowLink: any): void {
    console.log(rowLink.link);

    this.router.navigate([rowLink.link]);
  }

  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = 'Elementos por pagina';
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
