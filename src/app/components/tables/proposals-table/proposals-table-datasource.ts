import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ProposalsTableItem {
  name: string;
  id: number;
  notes: string;
  air: number;
  biodiversity: number;
  foodsecurity: number; 
  carbon: number;
  culture: number;
  soil: number;
  water: number;
  status: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ProposalsTableItem[] = [
  {id: 1, name: 'Solar Farm', notes: 'Passed: 2 YES, 0 NO', air: 0, biodiversity: -2, carbon: 4, culture: 0, foodsecurity: 0, soil: 0,  water: 0, status: 'PASSED'},
  {id: 2, name: 'Oil Well - Fracking', notes: 'Failed: 0 YES, 2 NO', air: -4, biodiversity: -5, carbon: -5, culture: -3, foodsecurity: 0, soil: -5,  water: -5, status: 'FAILED'},
  {id: 3, name: 'Tree Planting Project', notes: 'RATING TBD', air: null, biodiversity: null, carbon: null, culture: null, foodsecurity: null, soil: null,  water: null, status: 'NOT YET RATED'},
];

/**
 * Data source for the ProposalsTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ProposalsTableDataSource extends DataSource<ProposalsTableItem> {
  data: ProposalsTableItem[] = EXAMPLE_DATA;
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
  connect(): Observable<ProposalsTableItem[]> {
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
  private getPagedData(data: ProposalsTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ProposalsTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'notes': return compare(a.notes, b.notes, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        case 'air': return compare(+a.air, +b.air, isAsc);
        case 'biodiversity': return compare(+a.biodiversity, +b.biodiversity, isAsc);
        case 'carbon': return compare(+a.carbon, +b.carbon, isAsc);
        case 'culture': return compare(+a.culture, +b.culture, isAsc);
        case 'soil': return compare(+a.soil, +b.soil, isAsc);
        case 'water': return compare(+a.water, +b.water, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
