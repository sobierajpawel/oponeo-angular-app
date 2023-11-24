import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forbiddenWordsValidator(forbiddenWords : string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const isForbiddenWordExist = forbiddenWords.some(word => control.value.includes(word));

        return isForbiddenWordExist ? { "forbiddenWord": { text: "Zakazane słowo użyte " + control.value } }
            : null;
    }
}