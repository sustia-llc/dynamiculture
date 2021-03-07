import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StoreSummary } from '../model/store-summary';

@Injectable({
  providedIn: 'root'
})
export class CommunitySummaryService {

  getCommunitySummary(): Observable<StoreSummary[]> {
    return of([
      { title: "Water Usage", value: "2,100,000", isIncrease: true, isPositiveTrend: false, color: "primary", percentValue: "0.08565", icon: "water", isCurrency: false },
      { title: "CO2 Emissions (tons)", value: "1.1", isIncrease: false, isPositiveTrend: true, color: "accent", percentValue: "0.02", icon: "directions_car", isCurrency: false }
    ]);
  }

  constructor() { }
}