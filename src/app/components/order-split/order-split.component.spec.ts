import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSplitComponent } from './order-split.component';

describe('OrderSplitComponent', () => {
  let component: OrderSplitComponent;
  let fixture: ComponentFixture<OrderSplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSplitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
