import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinAllocationChartComponent } from './coin-allocation-chart.component';

describe('CoinAllocationChartComponent', () => {
  let component: CoinAllocationChartComponent;
  let fixture: ComponentFixture<CoinAllocationChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinAllocationChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinAllocationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
