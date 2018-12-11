import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppRegBaseFormComponent} from '@register-form/base/base.component';
import {AppRegProfessionFormComponent} from '@register-form/profession/profession.component';
import {AppRegAdditionalFormComponent} from '@register-form/additional/additional.component';
import {AppRegSubmitFormComponent} from '@register-form/submit/submit.component';
import {AppRegMainFormComponent} from '@register-form/main/main.component';

import {AppErrorPageComponent} from '@common/error-page/error-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'register-main',
    pathMatch: 'full'
  },
  {
    path: 'register-main',
    component: AppRegMainFormComponent,
  },
  {
    path: 'register-base',
    component: AppRegBaseFormComponent,
  },
  {
    path: 'register-profession',
    component: AppRegProfessionFormComponent,
  },
  {
    path: 'register-additional',
    component: AppRegAdditionalFormComponent,
  },
  {
    path: 'register-submit',
    component: AppRegSubmitFormComponent,
  },
  {
    path: '**',
    component: AppErrorPageComponent,
    data: {
      number: '404'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
