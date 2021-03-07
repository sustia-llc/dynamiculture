import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TransactionsItem {
  name: string;
  id: number;
  date: Date;
  amt: number;
  currency: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TransactionsItem[] = [
  {id: 1, name: 'Dinner', date: new Date('2021-01-15'), amt: -.01, currency: 'OGA'},
  {id: 2, name: 'Organizing Community Event', date: new Date('2021-01-11'), amt: .1, currency: 'BEE'},
  {id: 3, name: 'Navajo Rug Resold Income 10%', date: new Date('2021-01-05'), amt: .1, currency: 'BEE'},
  {id: 4, name: 'Community Solar Income', date: new Date('2021-01-01'), amt: .1, currency: 'ETH'},
];

/**
 * Data source for the Transactions view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TransactionsDataSource extends DataSource<TransactionsItem> {
  data: TransactionsItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TransactionsItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TransactionsItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TransactionsItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'date': return compare(+a.date, +b.date, isAsc);
        case 'amt': return compare(+a.amt, +b.amt, isAsc);
        case 'currency': return compare(+a.currency, +b.currency, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
