import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-email',
  styleUrls: ['form-email.component.scss'],
  template: `
    <div 
      class="dynamic-field form-input" 
      [formGroup]="group">
      <label>
        {{ config.label }}
        <span *ngIf="config.required"> * </span>
      </label>
      <input
        type="email"
        [attr.placeholder]="config.placeholder"
        pattern=".+@.+" 
        size="30"
        [formControlName]="config.name">
      <div *ngIf="group.controls[config.name].invalid && (group.controls[config.name].dirty || group.controls[config.name].touched)" class="alert alert-danger">
        <div *ngIf="group.controls[config.name].errors">
          {{config.name}} is required
        </div>
      </div>
    </div>
  `
})
export class FormEmailComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
