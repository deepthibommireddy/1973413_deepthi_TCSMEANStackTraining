import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayQComponent } from './display-q.component';

describe('DisplayQComponent', () => {
  let component: DisplayQComponent;
  let fixture: ComponentFixture<DisplayQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
