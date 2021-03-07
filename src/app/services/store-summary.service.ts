import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StoreSummary } from '../model/store-summary';

@Injectable({
  providedIn: 'root'
})
export class StoreSummaryService {

  getStoreSummary(): Observable<StoreSummary[]> {
    return of([
      { title: "Incoming", value: "2465", isIncrease: true, isPositiveTrend: true, color: "primary", percentValue: "0.5383", icon: "payments", isCurrency: true },
      { title: "Outgoing", value: "243", isIncrease: true, isPositiveTrend: false, color: "accent", percentValue: "0.1565", icon: "shopping_cart", isCurrency: true },
    ]);
  }

  constructor() { }
}