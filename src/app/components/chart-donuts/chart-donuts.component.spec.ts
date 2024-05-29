import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDonutsComponent } from './chart-donuts.component';

describe('ChartDonutsComponent', () => {
  let component: ChartDonutsComponent;
  let fixture: ComponentFixture<ChartDonutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartDonutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartDonutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
