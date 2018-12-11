import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-number',
  styleUrls: ['form-number.component.scss'],
  template: `
    <div 
      class="dynamic-field form-input" 
      [formGroup]="group">
      <label>
        {{ config.label }}
        <span *ngIf="config.required"> * </span>
      </label>
      <input
        type="number"
        min="config.min"
        max="config.max"
        [attr.placeholder]="config.placeholder"
        [formControlName]="config.name">
    </div>
  `
})
export class FormNumberComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
