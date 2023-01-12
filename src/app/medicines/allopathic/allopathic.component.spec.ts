import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllopathicComponent } from './allopathic.component';

describe('AllopathicComponent', () => {
  let component: AllopathicComponent;
  let fixture: ComponentFixture<AllopathicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllopathicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllopathicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
