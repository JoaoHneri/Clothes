import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardToUpdateComponent } from './card-to-update.component';

describe('CardToUpdateComponent', () => {
  let component: CardToUpdateComponent;
  let fixture: ComponentFixture<CardToUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardToUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardToUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
