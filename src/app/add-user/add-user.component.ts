import { Component, ViewChild } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { HttpUsersService } from '../http-users.service';
import { delay } from 'rxjs';
import { FormUserComponent } from '../form-user/form-user.component';
import { ToastSharedService } from '../toast-shared.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  @ViewChild('formUserRef')
  formComponent! : FormUserComponent;

  constructor(private httpUserService : HttpUsersService, private toastSharedService : ToastSharedService){ 
  }

  addUser(user : User){
    this.httpUserService.postUser(user)
    .pipe(delay(2000))
    .subscribe({
      next : _ =>{
        this.formComponent.setSuccessfulState();
        this.toastSharedService.send("Dodano użytkownika");
      },
      error : _ =>{
        this.formComponent.setErrorState();
        this.toastSharedService.send("Wystąpił błąd");
      }
    })
  }
}
