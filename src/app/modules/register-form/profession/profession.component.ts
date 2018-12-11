import {Component, OnInit, ViewChild, EventEmitter, Output, AfterViewInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Validators} from '@angular/forms';

import {DynamicFormComponent} from '@dynamic-form/containers/dynamic-form/dynamic-form.component';
import {AppRegisterService} from '../register.service';

import {NotificationService} from '@shared/services/notificationService';
import {AppFormService} from '@shared/services/form.service';

const SETTINGS_FROM_FILE = true;

@Component({
  selector: 'app-register-profession',
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.scss']
})
export class AppRegProfessionFormComponent implements OnInit, AfterViewInit {
  @Output() public formValidState: EventEmitter<any> = new EventEmitter();
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  public formattedConfig = [];
  public formId = 1;

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
          const stepsData = data.steps[1];
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
        type: 'select',
        label: 'register.profession.optionChoose',
        name: 'profession-select',
        translateOptions: true,
        placeholder: 'Select an option',
        options: [
          'Design',
          'Code',
          'Deploy'
        ],
        validation: [Validators.required]
      }
    ];
  }


}
