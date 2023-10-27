import { Component } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { HttpUsersService } from '../http-users.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user : User = new User(1,"","","","",false);
  websites : string[] = [
    "hildegard.org",
    "anastasia.net",
    "ramiro.info"
  ];
  isValidationFailed = false;
  isSuccessfulResponse = false;
  isErrorResponse = false;
  isSubmitting = false;

  constructor(private httpUserService : HttpUsersService){
    
  }

  setDefaultValues(){
    this.user = new User(1,"Jan Kowalski","s@o","22233313","anastasia.net", true);
  }
  
  private resetFormStatusFlags(){
    this.isValidationFailed = false;
    this.isErrorResponse = false;
    this.isSuccessfulResponse = false;
    this.isSubmitting = false;
  }

  submit(form : NgForm){
    this.resetFormStatusFlags();

    if (form.invalid){
      this.isValidationFailed = true;
      return;
    }

    //Logike wysyłania żądania POST

    console.log(this.user);

    this.isSubmitting = true;

    this.httpUserService.postUser(this.user)
    .pipe(delay(2000))
    .subscribe({
      next : _ =>{
        this.isSuccessfulResponse = true;
        this.isSubmitting = false;
      },
      error : _ =>{
        this.isErrorResponse = true;
        this.isSubmitting = false;
      }
    })
  }
}
