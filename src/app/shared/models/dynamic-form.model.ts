import { ValidatorFn } from '@angular/forms';

export interface DynamicForm {
  controlName: string;
  type: string;
  label: string;
  selectMenuOptions?: { [key: string]: string };
  value?: string | number;
  // validators?: [ValidatorFn];
  required: boolean;
  class?: string;
  rows?: string;
  cols?: string;
}
