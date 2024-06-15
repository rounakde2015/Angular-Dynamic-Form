import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-dynamic-date-picker',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './dynamic-date-picker.component.html',
  styleUrl: './dynamic-date-picker.component.scss'
})
export class DynamicDatePickerComponent {
  @Input() datePickerLabel: any;

  @Input() field: any;

  formName: FormGroup;

  constructor(private formGroupDirective: FormGroupDirective) {
    this.formName = formGroupDirective.control;
  }
}
