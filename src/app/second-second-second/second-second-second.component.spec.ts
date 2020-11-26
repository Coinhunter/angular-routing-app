import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSecondSecondComponent } from './second-second-second.component';

describe('SecondSecondSecondComponent', () => {
  let component: SecondSecondSecondComponent;
  let fixture: ComponentFixture<SecondSecondSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondSecondSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSecondSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
