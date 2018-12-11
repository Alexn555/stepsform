import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-radio',
  styleUrls: ['form-radio.component.scss'],
  template: `
    <div 
      class="dynamic-field form-radio" 
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <input
        type="radio"
        [attr.placeholder]="config.placeholder"
        [formControlName]="config.name">
    </div>
  `
})
export class FormRadioComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
