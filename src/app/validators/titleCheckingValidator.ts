import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, map } from "rxjs";
import { HttpTodoItemsService } from "../http-todo-items.service";

export function titleCheckingValidator(httpTodoItemService: HttpTodoItemsService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        console.log(control.value);

        return httpTodoItemService.getTodoItemByTitle(control.value)
            .pipe(map(data => {
                if (data.length > 0){
                    return {"titleExists" : {text : `Tytuł ${control.value} już istnieje!`}}
                }

                return null;
            }))
    }
}