import { AbstractControl } from '@angular/forms';

export function StringValidator(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value == (/^[A-Za-z]+$/)) {
    return { 'username': true };
  }
  return null;
}