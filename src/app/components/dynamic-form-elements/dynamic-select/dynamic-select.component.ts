import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MessageService } from '../../../services/message.service';
import { filter, takeWhile } from 'rxjs';

@Component({
  selector: 'app-dynamic-select',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  templateUrl: './dynamic-select.component.html',
  styleUrl: './dynamic-select.component.scss'
})
export class DynamicSelectComponent implements AfterViewInit, OnDestroy {
  @Input() field: any;

  formName: FormGroup;
  flag: boolean = true;

  constructor(private formGroupDirective: FormGroupDirective, private messageService: MessageService) {
    this.formName = formGroupDirective.control;
  }

  ngAfterViewInit() {
    this.listenForLinkedData();
  }

  listenForLinkedData() {
    if (!this.field?.link) {
      return;
    }
    this.messageService.message$.pipe(
      filter(res => res.link === this.field.link),
      takeWhile(() => this.flag)
    ).subscribe((res) => {
      this.field.options = res.data
    });
  }

  changedValue(selectedValue: string) {
    if (!this.field.provideData) {
      return;
    }
    this.messageService.messageSubject.next({
      link: this.field.fieldName,
      data: this.field.provideData.filter((res: any) => res.sourceValue === selectedValue)
    });
  }

  ngOnDestroy() {
    this.flag = false;
  }

}
