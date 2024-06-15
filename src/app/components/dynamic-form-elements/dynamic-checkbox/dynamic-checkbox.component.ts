import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-dynamic-checkbox',
  standalone: true,
  imports: [
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './dynamic-checkbox.component.html',
  styleUrl: './dynamic-checkbox.component.scss'
})
export class DynamicCheckboxComponent {
  @Input() checkboxLabel: any;

  @Input() field: any;

  formName: FormGroup;

  constructor(private formGroupDirective: FormGroupDirective) {
    this.formName = formGroupDirective.control;
  }
}
