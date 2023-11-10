import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpUsersService } from '../http-users.service';
import { User } from '../user';
import { delay } from 'rxjs';
import { NgForm } from '@angular/forms';
import { FormUserComponent } from '../form-user/form-user.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  @ViewChild('formUserRef')
  formComponent! : FormUserComponent;
  
  editedUser: User = new User(1, "", "", "", "", false);

  constructor(private activatedRoute: ActivatedRoute, private httpUserService: HttpUsersService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      let id = param["id"];

      this.httpUserService.getUser(id)
        .subscribe(data => {
          this.editedUser = data;
        })
    })
  }

  editUser(user : User) {
    this.httpUserService.putUser(user)
      .pipe(delay(2000))
      .subscribe({
        next: _ => {
          this.formComponent.setSuccessfulState();
        },
        error: _ => {
          this.formComponent.setErrorState();
        }
      })
  }
}

