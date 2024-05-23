import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDateComponent } from './chart-date.component';

describe('ChartDateComponent', () => {
  let component: ChartDateComponent;
  let fixture: ComponentFixture<ChartDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
