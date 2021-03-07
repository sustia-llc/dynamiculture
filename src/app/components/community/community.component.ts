import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CommunitySummaryService } from 'src/app/services/community-summary.service';
import { StoreSummary } from 'src/app/model/store-summary';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent {

  miniCardData: StoreSummary[];

  constructor(private breakpointObserver: BreakpointObserver, private summaryService: CommunitySummaryService) {}

  ngOnInit() {
    this.summaryService.getCommunitySummary().subscribe({
      next: summaryData => {
        this.miniCardData = summaryData;
      }
    });
  }

  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }
 
     return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 2, rows: 2 },
      };
    })
  );
}
