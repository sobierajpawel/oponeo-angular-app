import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpUsersService } from '../http-users.service';
import { User } from '../user';
import { delay } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User = new User(1, "", "", "", "", false);
  websites: string[] = [
    "hildegard.org",
    "anastasia.net",
    "ramiro.info"
  ];
  isValidationFailed = false;
  isSuccessfulResponse = false;
  isErrorResponse = false;
  isSubmitting = false;

  constructor(private activatedRoute: ActivatedRoute, private httpUserService: HttpUsersService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      let id = param["id"];

      this.httpUserService.getUser(id)
        .subscribe(data => {
          this.user = data;
        })
    })

  }

  private resetFormStatusFlags() {
    this.isValidationFailed = false;
    this.isErrorResponse = false;
    this.isSuccessfulResponse = false;
    this.isSubmitting = false;
  }

  setDefaultValues(){
    this.user = new User(1,"Jan Kowalski","s@o","22233313","anastasia.net", true);
  }

  submit(form: NgForm) {
    this.resetFormStatusFlags();

    if (form.invalid) {
      this.isValidationFailed = true;
      return;
    }

    //Logike wysyłania żądania PUT

    console.log(this.user);

    this.isSubmitting = true;

    this.httpUserService.putUser(this.user)
      .pipe(delay(2000))
      .subscribe({
        next: _ => {
          this.isSuccessfulResponse = true;
          this.isSubmitting = false;
        },
        error: _ => {
          this.isErrorResponse = true;
          this.isSubmitting = false;
        }
      })
  }
}

