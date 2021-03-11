import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeCountChartComponent } from './bee-count-chart.component';

describe('BeeCountChartComponent', () => {
  let component: BeeCountChartComponent;
  let fixture: ComponentFixture<BeeCountChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeeCountChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeCountChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
