import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeverageInputComponent } from './beverage-input.component';

describe('BeverageInputComponent', () => {
  let component: BeverageInputComponent;
  let fixture: ComponentFixture<BeverageInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeverageInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeverageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
