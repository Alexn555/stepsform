import {Component, OnInit, Input} from '@angular/core';
import {DynamicFormComponent} from '@dynamic-form/containers/dynamic-form/dynamic-form.component';

import {TranslateService} from '@ngx-translate/core';
import {AppRegisterService} from '../register.service';
import {AppFormService} from '@shared/services/form.service';

import {NotificationService} from '@shared/services/notificationService';


@Component({
  selector: 'app-register-header-navigation',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class AppRegHeaderNavigationComponent implements OnInit {
  @Input() public currentStepId = 0;

  constructor(private regService: AppRegisterService,
              private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
  }

}
