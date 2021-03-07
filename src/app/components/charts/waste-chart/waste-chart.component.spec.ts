import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteChartComponent } from './waste-chart.component';

describe('WasteChartComponent', () => {
  let component: WasteChartComponent;
  let fixture: ComponentFixture<WasteChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasteChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WasteChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
