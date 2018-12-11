import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormEmailComponent } from './components/form-email/form-email.component';
import { FormNumberComponent } from './components/form-number/form-number.component';
import { FormRadioComponent } from './components/form-radio/form-radio.component';
import { FormSelectComponent } from './components/form-select/form-select.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    DynamicFieldDirective,
    DynamicFormComponent,
    FormButtonComponent,
    FormInputComponent,
    FormEmailComponent,
    FormNumberComponent,
    FormRadioComponent,
    FormSelectComponent
  ],
  exports: [
    DynamicFormComponent
  ],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormEmailComponent,
    FormNumberComponent,
    FormRadioComponent,
    FormSelectComponent
  ]
})
export class DynamicFormModule {}