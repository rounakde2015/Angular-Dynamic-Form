import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicErrorMessageComponent } from './dynamic-error-message.component';

describe('DynamicErrorMessageComponent', () => {
  let component: DynamicErrorMessageComponent;
  let fixture: ComponentFixture<DynamicErrorMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicErrorMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
