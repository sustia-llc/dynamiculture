import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeSourceChartComponent } from './income-source-chart.component';

describe('IncomeSourceChartComponent', () => {
  let component: IncomeSourceChartComponent;
  let fixture: ComponentFixture<IncomeSourceChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeSourceChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeSourceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
