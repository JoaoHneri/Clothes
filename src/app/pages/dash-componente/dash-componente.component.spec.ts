import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashComponenteComponent } from './dash-componente.component';

describe('DashComponenteComponent', () => {
  let component: DashComponenteComponent;
  let fixture: ComponentFixture<DashComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
