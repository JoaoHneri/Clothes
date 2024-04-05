import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioCollectionComponent } from './anuncio-collection.component';

describe('AnuncioCollectionComponent', () => {
  let component: AnuncioCollectionComponent;
  let fixture: ComponentFixture<AnuncioCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnuncioCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnuncioCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
