import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoOffcanvasComponent } from './carrinho-offcanvas.component';

describe('CarrinhoOffcanvasComponent', () => {
  let component: CarrinhoOffcanvasComponent;
  let fixture: ComponentFixture<CarrinhoOffcanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrinhoOffcanvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrinhoOffcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
