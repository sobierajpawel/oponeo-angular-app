import { Component } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms';

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

  submit(form : NgForm){
    this.isValidationFailed = false;

    if (form.invalid){
      this.isValidationFailed = true;
      return;
    }

    //Logike wysyłania żądania POST
  }
}
