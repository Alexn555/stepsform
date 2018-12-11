import {Component, OnInit, Input, Output, ViewChild, EventEmitter, AfterViewInit} from '@angular/core';
import {Validators} from '@angular/forms';
import {DynamicFormComponent} from '@dynamic-form/containers/dynamic-form/dynamic-form.component';

import {TranslateService} from '@ngx-translate/core';
import {AppRegisterService} from '../register.service';
import {AppFormService} from '@shared/services/form.service';
import {NotificationService} from '@shared/services/notificationService';

const SETTINGS_FROM_FILE = true;

@Component({
  selector: 'app-register-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class AppRegBaseFormComponent implements OnInit, AfterViewInit {
  @Output() public formValidState: EventEmitter<any> = new EventEmitter();

  public formattedConfig = [];
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  public formId = 0;

  constructor(private regService: AppRegisterService,
              private formService: AppFormService,
              private notifyService: NotificationService,
              private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    if (SETTINGS_FROM_FILE) {
      this.getFormData();
    } else {
      this.getFormDataTest();
    }
  }

  getFormData() {
    this.regService.getFormStepsData().subscribe(data => {
        if (data.steps && data.steps.length > 0) {
          const stepsData = data.steps[0];
          this.formId = stepsData.id;
          let config = stepsData.formConfig;
          config = this.formService.getCorrectFormatConfig(config, this.translate);
          this.formattedConfig = config;
        }
      },
      error => {
        this.notifyService.showError('Error', this.translate.instant('register.error.noDataFound'));
      });
  }


  ngAfterViewInit() {
    this.form.changes.subscribe(() => {
      this.formValidState.emit({ formId: this.formId, valid: this.form.valid, values: this.form.value });
    });
  }

  getFormDataTest() {
    this.formattedConfig = [
      {
        type: 'input',
        label: 'First name',
        name: 'firstName',
        placeholder: 'First name',
        validation: [Validators.required,
          Validators.minLength(2),
          Validators.maxLength(12)]
      },
      {
        type: 'select',
        label: 'Favourite Food',
        name: 'food',
        options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
        placeholder: 'Select an option',
        validation: [Validators.required]
      },
      {
        label: 'Submit',
        name: 'submit',
        type: 'button'
      }
    ];
  }

}
