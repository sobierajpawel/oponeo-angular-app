import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, map } from "rxjs";
import { HttpUsersService } from "../http-users.service";

export function activeUserValidator(httpUserService : HttpUsersService) : AsyncValidatorFn{
    return (control : AbstractControl) : Observable<ValidationErrors | null> =>{

        return httpUserService.getUser(control.value)
            .pipe(map(user=>{
                return user.isActive ? null : { "notActiveUser": { text : "Użytkownik nie jest aktywny!"} }
            }));
    }
}