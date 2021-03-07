import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProposalsTableDataSource, ProposalsTableItem } from './proposals-table-datasource';

@Component({
  selector: 'app-proposals-table',
  templateUrl: './proposals-table.component.html',
  styleUrls: ['./proposals-table.component.scss']
})
export class ProposalsTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ProposalsTableItem>;
  dataSource: ProposalsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'notes',
  'air',
  'biodiversity',
  'carbon',
  'culture',
  'foodsecurity',
  'soil',
  'water',
  'status'];

  ngOnInit() {
    this.dataSource = new ProposalsTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
