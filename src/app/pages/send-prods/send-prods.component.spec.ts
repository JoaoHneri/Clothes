import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendProdsComponent } from './send-prods.component';

describe('SendProdsComponent', () => {
  let component: SendProdsComponent;
  let fixture: ComponentFixture<SendProdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendProdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendProdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
