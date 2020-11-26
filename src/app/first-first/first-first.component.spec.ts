import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstFirstComponent } from './first-first.component';

describe('FirstFirstComponent', () => {
  let component: FirstFirstComponent;
  let fixture: ComponentFixture<FirstFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
