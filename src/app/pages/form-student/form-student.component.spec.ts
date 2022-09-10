import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/pages/form-studant/form-studant.component.spec.ts
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
========
import { FormStudentComponent } from './form-student.component';

describe('FormEstudanteComponent', () => {
  let component: FormStudentComponent;
  let fixture: ComponentFixture<FormStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormStudentComponent);
>>>>>>>> main:src/app/pages/form-student/form-student.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
