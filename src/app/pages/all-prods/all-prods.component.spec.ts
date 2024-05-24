import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProdsComponent } from './all-prods.component';

describe('AllProdsComponent', () => {
  let component: AllProdsComponent;
  let fixture: ComponentFixture<AllProdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllProdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
