import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';

import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {ModalModule} from 'ngx-bootstrap/modal';
import {BsDropdownModule} from 'ngx-bootstrap';

import {DynamicFormModule} from '../dynamic-form/dynamic-form.module';

import {AppRegHeaderNavigationComponent} from '@register-form/header-navigation/header.component';
import {AppRegStepNavigationComponent} from '@register-form/step-navigation/step-navigation.component';
import {AppRegBaseFormComponent} from '@register-form/base/base.component';
import {AppRegProfessionFormComponent} from '@register-form/profession/profession.component';
import {AppRegAdditionalFormComponent} from '@register-form/additional/additional.component';
import {AppRegSubmitFormComponent} from '@register-form/submit/submit.component';
import {AppRegMainFormComponent} from '@register-form/main/main.component';

import { AppRegisterService } from './register.service';

@NgModule({
  declarations: [
    AppRegHeaderNavigationComponent,
    AppRegStepNavigationComponent,
    AppRegBaseFormComponent,
    AppRegProfessionFormComponent,
    AppRegAdditionalFormComponent,
    AppRegSubmitFormComponent,
    AppRegMainFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TranslateModule,
    DynamicFormModule
  ],
  exports: [],
  providers: [AppRegisterService],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterFormModule { }
