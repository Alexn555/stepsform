import { ValidatorFn } from '@angular/forms';

export interface FieldConfig {
  disabled?: boolean;
  label?: string;
  name: string;
  options?: string[];
  placeholder?: string;
  min?: number;
  max?: number;
  type: string;
  validation?: ValidatorFn[];
  value?: any;
}
