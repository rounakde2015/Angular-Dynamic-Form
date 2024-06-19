import {AfterViewInit, ChangeDetectorRef, Component, Input, ViewChild, ViewContainerRef} from '@angular/core';
import {DynamicInputComponent} from "../dynamic-form-elements/dynamic-input/dynamic-input.component";
import {DynamicDatePickerComponent} from "../dynamic-form-elements/dynamic-date-picker/dynamic-date-picker.component";
import {
  DynamicRadioButtonComponent
} from "../dynamic-form-elements/dynamic-radio-button/dynamic-radio-button.component";
import {DynamicCheckboxComponent} from "../dynamic-form-elements/dynamic-checkbox/dynamic-checkbox.component";
import {DynamicSelectComponent} from "../dynamic-form-elements/dynamic-select/dynamic-select.component";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dynamic-field',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-field.component.html',
  styleUrl: './dynamic-field.component.scss'
})
export class DynamicFieldComponent implements AfterViewInit {

  dynamicComponents = [
    {
      componentName: 'text',
      component: DynamicInputComponent
    },
    {
      componentName: 'date-picker',
      component: DynamicDatePickerComponent
    },
    {
      componentName: 'radio-button',
      component: DynamicRadioButtonComponent
    },
    {
      componentName: 'checkbox',
      component: DynamicCheckboxComponent
    },
    {
      componentName: 'select',
      component: DynamicSelectComponent
    }
  ]
  @ViewChild('dynamicInputContainer', {read: ViewContainerRef}) dynamicInputContainer!: ViewContainerRef;
  @Input() field: any;
  formName: FormGroup | undefined;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.registerDynamicField();
  }

  registerDynamicField(): void {
    this.dynamicInputContainer.clear();
    const componentInstance = this.getComponentByType(this.field.type);
    const dynamicComponent = this.dynamicInputContainer.createComponent(componentInstance);
    dynamicComponent.setInput('field', this.field);
    this.changeDetectorRef.detectChanges();
    }

  private getComponentByType(componentType: String): any {
    let dynamicComponent = this.dynamicComponents.find(component => component.componentName === componentType);
    return dynamicComponent || DynamicInputComponent;
  }
}
