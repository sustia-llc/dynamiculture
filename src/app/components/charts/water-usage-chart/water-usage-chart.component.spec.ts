import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterUsageChartComponent } from './water-usage-chart.component';

describe('WaterUsageChartComponent', () => {
  let component: WaterUsageChartComponent;
  let fixture: ComponentFixture<WaterUsageChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterUsageChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterUsageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
