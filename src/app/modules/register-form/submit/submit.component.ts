import {Component, OnInit, ViewChild, Input, EventEmitter, Output, AfterViewInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DynamicFormComponent} from '@dynamic-form/containers/dynamic-form/dynamic-form.component';
import {AppRegisterService} from '../register.service';

import {NotificationService} from '@shared/services/notificationService';
import {AppFormService} from '@shared/services/form.service';

const SETTINGS_FROM_FILE = true;

@Component({
  selector: 'app-register-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class AppRegSubmitFormComponent implements OnInit, AfterViewInit {
  @Input() public summaryFormObject = [];

  @Output() public formValidState: EventEmitter<any> = new EventEmitter();
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  public formattedConfig = [];
  public formId = 3;

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
          let config = data.steps[3].formConfig;
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
      this.formValidState.emit({ formId: this.formId, valid: this.form.valid });
    });
  }

  getFormDataTest() {
    this.formattedConfig = [
      {
        type: 'button',
        label: 'register.submit.submitBtn',
        name: 'submit-register-form',
        placeholder: 'Submit',
        validation: []
      }
    ];
  }

  submit(value: {[name: string]: any}) {
    this.notifyService.showSuccess('Success',
      this.translate.instant('register.submit.success'));

    console.log(' ---> summary form object' + JSON.stringify(this.summaryFormObject));
  }


}
