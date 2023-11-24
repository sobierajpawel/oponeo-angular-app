import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function firstLetterUpperCaseValidator() : ValidatorFn {
    return (control : AbstractControl) : ValidationErrors | null =>{
        if (control.value == null || control.value.length == 0){
            return null;
        }

        const firstLetter = control.value.charAt(0);
        const isFirstLetterUpper = firstLetter == firstLetter.toUpperCase();

        return isFirstLetterUpper ? null : { "notUpperCaseTitle" : { text : "Pierwsza litera nie jest dużą!" }};
    }
}