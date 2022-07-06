import { ValidatorFn } from '@angular/forms';

export interface DynamicForm {
  controlName: string;
  type: 'text' | 'select';
  label: string;
  selectMenuOptions?: { [key: string]: string };
  value?: string | number;
  // validators?: [ValidatorFn];
  required: boolean;
}
