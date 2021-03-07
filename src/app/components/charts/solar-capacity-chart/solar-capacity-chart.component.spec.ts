import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarCapacityChartComponent } from './solar-capacity-chart.component';

describe('SolarCapacityChartComponent', () => {
  let component: SolarCapacityChartComponent;
  let fixture: ComponentFixture<SolarCapacityChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolarCapacityChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarCapacityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
