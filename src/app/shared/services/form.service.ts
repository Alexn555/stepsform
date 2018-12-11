import {Injectable} from '@angular/core';
import {Validators} from '@angular/forms';

@Injectable()
export class AppFormService {

  constructor() {
  }

  getCorrectFormatConfig(formItems, translationService) {
    for (let i = 0; i < formItems.length; i++) {
      formItems[i].label = this.getTranslation(formItems[i].label, translationService);
      if (formItems[i].translateOptions) {
        formItems[i].options = this.getOptionsTranslations(formItems[i].options, translationService);
      }
      formItems[i].validation = this.transformValidationFromArrayToFunctions(formItems[i].validation);
    }
    return formItems;
  }

  getOptionsTranslations(options, translationService) {
    const translatedOptions = [];
    for (const option of options) {
      translatedOptions.push(this.getTranslation(option, translationService));
    }
    return translatedOptions;
  }

  getTranslation(label: string, translationService) {
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
