import { AbstractControl, ValidationErrors } from "@angular/forms"

export class CustomValidator {
    static nonWhiteSpace = (ctrl: AbstractControl) => {
        if (ctrl.value.trim().length > 0){
            return (null)
        }
        else{
            return { nonWhiteSpace: true } as ValidationErrors
        }
    }

    static checkWhiteSpace(ctrl: AbstractControl): ValidationErrors | null {
        const hasWhiteSpace = /\s/.test(ctrl.value); // Check if input contains whitespace
        // const hasWhiteSpace = /^\s|\s$/.test(ctrl.value); // Check if input starts or ends with whitespace //no working
        if (!hasWhiteSpace) {
            return null; // Return null if validation passes
        }
        return { nonWhiteSpace: true }; // Return an object with an error key if validation fails
    }
  
    static lessThanToday = (ctrl : AbstractControl) => {
        let today : Date = new Date();
        
        if(new Date(ctrl.value) > today)
            return {lessThanToday : true} as ValidationErrors
        return null
    }
}
