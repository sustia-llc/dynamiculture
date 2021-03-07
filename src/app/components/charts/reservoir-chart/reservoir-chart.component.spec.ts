import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservoirChartComponent } from './reservoir-chart.component';

describe('ReservoirChartComponent', () => {
  let component: ReservoirChartComponent;
  let fixture: ComponentFixture<ReservoirChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservoirChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservoirChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
