import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSecondComponent } from './first-second.component';

describe('FirstSecondComponent', () => {
  let component: FirstSecondComponent;
  let fixture: ComponentFixture<FirstSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
