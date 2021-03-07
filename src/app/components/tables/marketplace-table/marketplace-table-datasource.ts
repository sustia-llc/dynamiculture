import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface MarketplaceTableItem {
  name: string;
  id: number;
  artist: string;
  image: string;
  artist_photo: string;
  price: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: MarketplaceTableItem[] = [
  {
    id: 1,
    name: 'Muscogee Creek Beadwork',
    artist: 'indigenousbeader',
    image: 'assets/muscogee_creek.jpg',
    artist_photo: 'assets/artist1.jpg',
    price: 0.5
  },
  {
    id: 2,
    name: 'Lakota Beadwork',
    artist: 'lakota_artist',
    image: 'assets/Lakota_Beadwork.jpg',
    artist_photo: 'assets/artist2.jpg',
    price: 1.0
  },
  {
    id: 3,
    name: 'Beadwork on Container',
    artist: 'artist',
    image: 'assets/beadworkoncontainer.jpg',
    artist_photo: 'assets/artist3.jpg',
    price: 0.7,
  },
  {
    id: 4,
    name: 'Araphahoe Beadwork',
    artist: 'artist',
    image: 'assets/arapaho_beadwork.jpg',
    artist_photo: 'assets/artist3.jpg',
    price: 0.75
  }
];

/**
 * Data source for the MarketplaceTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class MarketplaceTableDataSource extends DataSource<MarketplaceTableItem> {
  data: MarketplaceTableItem[] = EXAMPLE_DATA;
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
  connect(): Observable<MarketplaceTableItem[]> {
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
  private getPagedData(data: MarketplaceTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: MarketplaceTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'artist': return compare(a.artist, b.artist, isAsc);
        case 'image': return compare(a.image, b.image, isAsc);
        case 'artist_photo': return compare(a.artist_photo, b.artist_photo, isAsc);
        case 'price': return compare(+a.price, +b.price, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
