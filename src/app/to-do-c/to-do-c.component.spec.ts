import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoCComponent } from './to-do-c.component';

describe('ToDoCComponent', () => {
  let component: ToDoCComponent;
  let fixture: ComponentFixture<ToDoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
