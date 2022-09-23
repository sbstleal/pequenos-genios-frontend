import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableClassComponent } from './table-class.component';

describe('TableClassComponent', () => {
  let component: TableClassComponent;
  let fixture: ComponentFixture<TableClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
