import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPodFormComponent } from './edit-pod-form.component';

describe('EditPodFormComponent', () => {
  let component: EditPodFormComponent;
  let fixture: ComponentFixture<EditPodFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPodFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPodFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
