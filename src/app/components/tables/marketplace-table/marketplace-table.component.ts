import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MarketplaceTableDataSource, MarketplaceTableItem } from './marketplace-table-datasource';

@Component({
  selector: 'app-marketplace-table',
  templateUrl: './marketplace-table.component.html',
  styleUrls: ['./marketplace-table.component.scss']
})
export class MarketplaceTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<MarketplaceTableItem>;
  dataSource: MarketplaceTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'artist', 'image', 'price'];

  ngOnInit() {
    this.dataSource = new MarketplaceTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
