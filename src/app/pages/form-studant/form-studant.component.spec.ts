import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStudantComponent } from './form-studant.component';

describe('FormStudantComponent', () => {
  let component: FormStudantComponent;
  let fixture: ComponentFixture<FormStudantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStudantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormStudantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
