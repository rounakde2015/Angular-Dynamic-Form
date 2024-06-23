import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormGroupDirective} from "@angular/forms";

@Component({
  selector: 'app-dynamic-error-message',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-error-message.component.html',
  styleUrl: './dynamic-error-message.component.scss'
})
export class DynamicErrorMessageComponent implements OnInit{
  formName: FormGroup;
  @Input() fieldName: String;

  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit() {
    this.formName = this.formGroupDirective.control;
  }

}
