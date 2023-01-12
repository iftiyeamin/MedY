import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandListEditComponent } from './brand-list-edit.component';

describe('BrandListEditComponent', () => {
  let component: BrandListEditComponent;
  let fixture: ComponentFixture<BrandListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandListEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
