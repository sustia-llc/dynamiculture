import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeSourceCoinChartComponent } from './income-source-coin-chart.component';

describe('IncomeSourceCoinChartComponent', () => {
  let component: IncomeSourceCoinChartComponent;
  let fixture: ComponentFixture<IncomeSourceCoinChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeSourceCoinChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeSourceCoinChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
