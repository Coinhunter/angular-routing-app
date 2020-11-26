import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSecondSecondComponent } from './first-second-second.component';

describe('FirstSecondSecondComponent', () => {
  let component: FirstSecondSecondComponent;
  let fixture: ComponentFixture<FirstSecondSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstSecondSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSecondSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
