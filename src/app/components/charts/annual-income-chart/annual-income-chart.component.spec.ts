import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualIncomeChartComponent } from './annual-income-chart.component';

describe('AnnualIncomeChartComponent', () => {
  let component: AnnualIncomeChartComponent;
  let fixture: ComponentFixture<AnnualIncomeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualIncomeChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualIncomeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
