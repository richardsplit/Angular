import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditModComponent } from './add-edit-mod.component';

describe('AddEditModComponent', () => {
  let component: AddEditModComponent;
  let fixture: ComponentFixture<AddEditModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditModComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
