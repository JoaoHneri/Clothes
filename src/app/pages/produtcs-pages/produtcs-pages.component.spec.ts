import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutcsPagesComponent } from './produtcs-pages.component';

describe('ProdutcsPagesComponent', () => {
  let component: ProdutcsPagesComponent;
  let fixture: ComponentFixture<ProdutcsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutcsPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutcsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
