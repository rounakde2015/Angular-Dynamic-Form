import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicRadioButtonComponent } from './dynamic-radio-button.component';

describe('DynamicRadioButtonComponent', () => {
  let component: DynamicRadioButtonComponent;
  let fixture: ComponentFixture<DynamicRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicRadioButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
