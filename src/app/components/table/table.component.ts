import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IColumns, IConfigTable, ISendDataTable, TypeActions } from '../../interfaces/table.interface';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormatDatePipe } from '../../pipes/FormatDate.pipe';

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
    RouterLink,
    MatIconModule,
    MatButtonModule,
    FormatDatePipe
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit, AfterViewInit {

  @Input() columns: IColumns<any>[] = [];
  @Input() configTable: IConfigTable = { btnAdd: true };
  @Input() dataTable: any[] = [];

  @Output() addNew = new EventEmitter<boolean>();
  @Output() edit = new EventEmitter<any>();

  @Output() sendData = new EventEmitter<ISendDataTable>();

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(col => col.name);
    this.dataSource = new MatTableDataSource(this.dataTable);
  }

  styleHead(styles: string | undefined): string {
    return `${styles}`
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataTable']) {
      this.dataSource = new MatTableDataSource(this.dataTable);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = 'Elementos por pagina';
    this.dataSource = new MatTableDataSource(this.dataTable);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    if (this.dataTable && this.dataTable.length > 0) {
      const filterColumns = this.columns.filter(column => column.type !== 'icon').map(col => col.name);
      
      const filterSearch = filterColumns.map((col: string) => {
        return (
          this.dataTable.filter((fil) => {
            const splitWord = col.split('.');
            // console.log(splitWord);
            if(splitWord.length == 1){
              // console.log(fil[splitWord[0]]);
              return (fil[splitWord[0]].toString().toLowerCase().includes(filterValue.toLowerCase()))
            }
            if(splitWord.length == 2){
              return (fil[splitWord[0]][splitWord[1]].toString().toLowerCase().includes(filterValue.toLowerCase()))
            }
            if(splitWord.length == 3){
              return (fil[splitWord[0]][splitWord[1]][splitWord[2]].toString().toLowerCase().includes(filterValue.toLowerCase()))
            }
            return (fil[col].toString().toLowerCase().includes(filterValue.toLowerCase()))
          }
          )
        )
      }
          
        )
        .flat();
      const reduceFilter = new Set(filterSearch);
      const result = [...reduceFilter];
      this.dataSource.data = result;
    }

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }

  redirectLink(rowLink: any): void {
    console.log(rowLink.link);

    this.router.navigate([rowLink.link]);
  }

  openDialog(): void {
    this.sendData.emit({ data: null, action: 'add' })
  }

  editDataDialog(data: any, actionColumn: string): void {
    this.sendData.emit({ data: data, action: actionColumn as TypeActions })
  }
}
