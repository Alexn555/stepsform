import {Component, OnInit, ViewChild, EventEmitter, Output, AfterViewInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import {DynamicFormComponent} from '@dynamic-form/containers/dynamic-form/dynamic-form.component';
import {AppRegisterService} from '../register.service';
import {AppFormService} from '@shared/services/form.service';
import {NotificationService} from '@shared/services/notificationService';

const SETTINGS_FROM_FILE = true;

@Component({
  selector: 'app-register-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss']
})
export class AppRegAdditionalFormComponent implements OnInit, AfterViewInit {
  @Output() public formValidState: EventEmitter<any> = new EventEmitter();
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  public formattedConfig = [];
  public formId = 2;

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
          const stepsData = data.steps[2];
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
        label: 'Street',
        name: 'street',
        placeholder: 'Street',
        validation: []
      },
      {
        type: 'input',
        label: 'City',
        name: 'city',
        placeholder: 'City',
        validation: []
      },
      {
        type: 'input',
        label: 'State',
        name: 'state',
        placeholder: 'State',
        validation: []
      },
      {
        type: 'number',
        min: 2,
        max: 7,
        label: 'Zip',
        name: 'zip',
        placeholder: 'Zip',
        validation: []
      }
    ];
  }


}
