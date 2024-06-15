import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDatePickerComponent } from './dynamic-date-picker.component';

describe('DynamicDatePickerComponent', () => {
  let component: DynamicDatePickerComponent;
  let fixture: ComponentFixture<DynamicDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicDatePickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
