import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondFirstComponent } from './second-first.component';

describe('SecondFirstComponent', () => {
  let component: SecondFirstComponent;
  let fixture: ComponentFixture<SecondFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
