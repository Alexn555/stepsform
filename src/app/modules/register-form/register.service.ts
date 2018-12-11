import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Validators} from '@angular/forms';

@Injectable()
export class AppRegisterService {

  constructor(private http: HttpClient) {
  }

  getFormStepsData(): Observable<any> {
    return this.http.get<any>('./assets/data/register-form.json').
       pipe(map(res => {
          return res;
    }));
  }

  getCorrectFormatConfig(formItems, translationService) {
    for (let i = 0; i < formItems.length; i++) {
      formItems[i].label = this.getLabelTranslation(formItems[i].label, translationService);
      formItems[i].validation = this.transformValidationFromArrayToFunctions(formItems[i].validation);
    }
    return formItems;
  }

  getLabelTranslation(label: string, translationService) {
    return translationService.instant(label);
  }

  transformValidationFromArrayToFunctions(rawValidators) {
    if (rawValidators.length <= 0) { return rawValidators; }

    const rawValidatorArray = rawValidators[0];
    for (const validator of Object.keys( rawValidatorArray )) {
      if (validator === 'required') {
        rawValidators.push(Validators.required);
      }
      if (validator === 'min') {
        rawValidators.push(Validators.minLength(rawValidatorArray[validator]));
      }
      if (validator === 'max') {
        rawValidators.push(Validators.maxLength(rawValidatorArray[validator]));
      }
    }

    rawValidators.shift();
    return rawValidators;
  }

}
