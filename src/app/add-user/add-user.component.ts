import { Component, ViewChild } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { HttpUsersService } from '../http-users.service';
import { delay } from 'rxjs';
import { FormUserComponent } from '../form-user/form-user.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  @ViewChild('formUserRef')
  formComponent! : FormUserComponent;

  constructor(private httpUserService : HttpUsersService){ 
  }

  addUser(user : User){
    this.httpUserService.postUser(user)
    .pipe(delay(2000))
    .subscribe({
      next : _ =>{
        this.formComponent.setSuccessfulState();
      },
      error : _ =>{
        this.formComponent.setErrorState();
      }
    })
  }
}
