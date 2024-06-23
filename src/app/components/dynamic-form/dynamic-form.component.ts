import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {DynamicFieldComponent} from "../dynamic-field/dynamic-field.component";

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DynamicFieldComponent
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit{
  @Input() model: {};
  public dynamicFormGroup: FormGroup | undefined;
  public dynamicFormFields = [];

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    const formGroupFields = this.getFormControlsFields();
    this.dynamicFormGroup = new FormGroup(formGroupFields);
  }

  private getFormControlsFields() {
    const formGroupFields = {};
    for (const field of Object.keys(this.model)) {
      const fieldProps = this.model[field];
      const validators = this.addValidator(fieldProps.rules);
      formGroupFields[field] = new FormControl(fieldProps.value, validators);
      this.dynamicFormFields.push({...fieldProps, fieldName: field})
    }

    return formGroupFields;
  }

  private addValidator(rules: {}) {
    if(!rules) {
      return [];
    }
    const validators = Object.keys(rules).map(res => {
      switch (res) {
        case 'required':
          return Validators.required;
          // ... add more validators in future
      }
    });
    return validators
  }
}
