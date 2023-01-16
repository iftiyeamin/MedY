import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugclassesComponent } from './drugclasses.component';

describe('DrugclassesComponent', () => {
  let component: DrugclassesComponent;
  let fixture: ComponentFixture<DrugclassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugclassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrugclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
