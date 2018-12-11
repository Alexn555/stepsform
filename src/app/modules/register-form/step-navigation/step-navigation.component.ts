import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AppRegisterService} from '../register.service';

import {NotificationService} from '@shared/services/notificationService';
import {convertToNAIfNullOrEmpty} from '@shared/helpers/string-handler';
import {convertFromTimestampToDate} from '@shared/helpers/date-handler';
import {NavButtonSettings} from '../register.model';

@Component({
  selector: 'app-register-step-navigation',
  templateUrl: './step-navigation.component.html',
  styleUrls: ['./step-navigation.component.scss']
})
export class AppRegStepNavigationComponent implements OnInit {
  @Output() public prevActionTaken: EventEmitter<any> = new EventEmitter();
  @Output() public nextActionTaken: EventEmitter<any> = new EventEmitter();

  @Input() public settings: NavButtonSettings = {
     prevVisible: true,
     prevDisabled: false,
     nextVisible: true,
     nextDisabled: false,
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

  previousButtonClick() {
    const newStepId = this.settings.currentStepId - 1;
    this.prevActionTaken.emit({ newStepId: newStepId });
  }

  nextButtonClick() {
    const newStepId = this.settings.currentStepId + 1;
    this.nextActionTaken.emit({ newStepId: newStepId });
  }

}
