import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-dynamic-radio-button',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  templateUrl: './dynamic-radio-button.component.html',
  styleUrl: './dynamic-radio-button.component.scss'
})
export class DynamicRadioButtonComponent {
  @Input() field: any;

  formName: FormGroup;

  constructor(private formGroupDirective: FormGroupDirective) {
    this.formName = formGroupDirective.control;
  }

}
