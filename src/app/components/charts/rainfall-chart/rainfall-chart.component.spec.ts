import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainfallChartComponent } from './rainfall-chart.component';

describe('RainfallChartComponent', () => {
  let component: RainfallChartComponent;
  let fixture: ComponentFixture<RainfallChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RainfallChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RainfallChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
