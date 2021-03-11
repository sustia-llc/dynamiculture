import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndangeredSpeciesChartComponent } from './endangered-species-chart.component';

describe('EndangeredSpeciesChartComponent', () => {
  let component: EndangeredSpeciesChartComponent;
  let fixture: ComponentFixture<EndangeredSpeciesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndangeredSpeciesChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndangeredSpeciesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
