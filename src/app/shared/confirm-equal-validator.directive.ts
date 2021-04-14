import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl, AbstractControl } from '@angular/forms';

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [
        { provide: NG_VALIDATORS,
          useExisting: ConfirmEqualValidatorDirective ,
          multi: true 
         }
    ]
})

export class ConfirmEqualValidatorDirective implements Validator {
  //@Input() appConfirmEqualValidator: string;
    validate(passwordGroup: AbstractControl): {[key:string]: any} | null{
            const passwordField = passwordGroup.get('password');
            const confirmPasswordField = passwordGroup.get('confirmPassword');

            if (passwordField && confirmPasswordField && confirmPasswordField.value !== passwordField.value){
                return {'notEqual': true};
            }

            return null;
    }
}