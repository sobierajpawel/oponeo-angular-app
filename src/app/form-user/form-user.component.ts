import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent {
  isValidationFailed = false;
  isSuccessfulResponse = false;
  isErrorResponse = false;
  isSubmitting = false;
  @Input()
  isEditForm = true;
  @Output()
  submitEvent = new EventEmitter<User>();
  @Input()
  formSuccessText : string = "";
  @Input()
  user: User = new User(1, "", "", "", "", false);
  websites: string[] = [
    "hildegard.org",
    "anastasia.net",
    "ramiro.info"
  ];

  private resetFormStatusFlags() {
    this.isValidationFailed = false;
    this.isErrorResponse = false;
    this.isSuccessfulResponse = false;
    this.isSubmitting = false;
  }

  setDefaultValues() {
    this.user = new User(1, "Jan Kowalski", "s@o", "22233313", "anastasia.net", true);
  }

  setSuccessfulState() {
    this.isSuccessfulResponse = true;
    this.isSubmitting = false;
  }

  setErrorState() {
    this.isErrorResponse = true;
    this.isSubmitting = false;
  }

  validate(form: NgForm) {
    this.resetFormStatusFlags();

    if (form.invalid) {
      this.isValidationFailed = true;
      return;
    }
    this.isSubmitting = true;

    this.submitEvent.emit(this.user);
  }
}
