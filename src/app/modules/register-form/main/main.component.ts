import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import {AppRegisterService} from '../register.service';

import {NotificationService} from '@shared/services/notificationService';
import {convertToNAIfNullOrEmpty} from '@shared/helpers/string-handler';
import {convertFromTimestampToDate} from '@shared/helpers/date-handler';
import {NavButtonSettings} from '@register-form/register.model';

@Component({
  selector: 'app-register-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class AppRegMainFormComponent implements OnInit {
  public formStepsControl = {
    formBaseValid: false,
    formBaseValues: [],
    formProfessionValid: false,
    formProfessionValues: [],
    formAdditionalValid: false,
    formAdditionalValues: [],
    formSubmitValid: false,
    currentStepId: 0
  };

  @Input() public navButtonState: NavButtonSettings = {
    prevVisible: false,
    prevDisabled: false,
    nextVisible: true,
    nextDisabled: true,
    currentStepId: 0
  };

  constructor(private regService: AppRegisterService,
              private notifyService: NotificationService,
              private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
  }


  formValidStateChange(data) {
    if (data && data.formId !== undefined) {
      switch (data.formId) {
        case 0:
          this.formStepsControl.formBaseValid = data.valid;
          this.formStepsControl.formBaseValues = data.values;
          break;
        case 1:
          this.formStepsControl.formProfessionValid = data.valid;
          this.formStepsControl.formProfessionValues = data.values;
          break;
        case 2:
          this.formStepsControl.formAdditionalValid = data.valid;
          this.formStepsControl.formAdditionalValues = data.values;
          break;
        case 3:
          this.formStepsControl.formSubmitValid = data.valid;
          break;
      }
      this.setNewButtonState(data.formId, data.valid);
    }
  }

  prevButtonClicked(data) {
    this.setNewFormStep(data.newStepId);
  }

  nextButtonClicked(data) {
    this.setNewFormStep(data.newStepId);
  }

  setNewFormStep(newStepId: number) {
    this.navButtonState.currentStepId = newStepId;
    this.formStepsControl.currentStepId = newStepId;

    // set new default params for new step
    this.setNewButtonState(newStepId, false);
  }

  setNewButtonState(currentStepId: number, formValid: boolean) {
    const prevVisible = currentStepId !== 0;
    const nextVisible = currentStepId !== 3;

    const prevDisabled = false;
    let nextDisabled = false;
    if (!formValid) {
      nextDisabled = true;
    }

    this.applyNewNavButtonState(prevDisabled, nextDisabled,
      currentStepId, prevVisible, nextVisible);
  }

  applyNewNavButtonState(
                       prevDisabled: boolean,
                       nextDisabled: boolean,
                       newStepId: number = 0,
                       prevVisible: boolean = true,
                       nextVisible: boolean = true
                      ) {
    this.navButtonState = {
      prevVisible: prevVisible,
      prevDisabled: prevDisabled,
      nextVisible: nextVisible,
      nextDisabled: nextDisabled,
      currentStepId: newStepId
    };
  }


}
