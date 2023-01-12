import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugClassesComponent } from './drug-classes.component';

describe('DrugClassesComponent', () => {
  let component: DrugClassesComponent;
  let fixture: ComponentFixture<DrugClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrugClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
