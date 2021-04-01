import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfcvComponent } from './ofcv.component';

describe('OfcvComponent', () => {
  let component: OfcvComponent;
  let fixture: ComponentFixture<OfcvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfcvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
