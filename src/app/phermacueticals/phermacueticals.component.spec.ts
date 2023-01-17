import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhermacueticalsComponent } from './phermacueticals.component';

describe('PhermacueticalsComponent', () => {
  let component: PhermacueticalsComponent;
  let fixture: ComponentFixture<PhermacueticalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhermacueticalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhermacueticalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
