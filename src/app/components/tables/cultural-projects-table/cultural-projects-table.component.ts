import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CulturalProjectsTableDataSource, CulturalProjectsTableItem } from './cultural-projects-table-datasource';

@Component({
  selector: 'app-cultural-projects-table',
  templateUrl: './cultural-projects-table.component.html',
  styleUrls: ['./cultural-projects-table.component.scss']
})
export class CulturalProjectsTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<CulturalProjectsTableItem>;
  dataSource: CulturalProjectsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'completed'];

  ngOnInit() {
    this.dataSource = new CulturalProjectsTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
