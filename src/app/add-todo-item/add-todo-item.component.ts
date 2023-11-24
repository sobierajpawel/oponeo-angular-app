import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpUsersService } from '../http-users.service';
import { User } from '../user';
import { TodoItem } from '../todo-item';
import { HttpTodoItemsService } from '../http-todo-items.service';
import { forbiddenWordsValidator } from '../validators/forbiddenWordsValidator';
import { titleCheckingValidator } from '../validators/titleCheckingValidator';
import { firstLetterUpperCaseValidator } from '../validators/firstLetterUpperCaseValidator';
import { activeUserValidator } from '../validators/activeUserValidator';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css']
})
export class AddTodoItemComponent implements OnInit {
  todoItemForm: FormGroup;
  minLengthTitle = 10;
  maxLengthTitle = 20;
  users: User[] = [];
  isFormInvalid = false;
  isSuccessfulResponse = false;

  constructor(private formBuilder: FormBuilder, private httpUserService: HttpUsersService,
    private todoItemHttpService: HttpTodoItemsService) {
    this.todoItemForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required,
      forbiddenWordsValidator(['test', 'example']),
      firstLetterUpperCaseValidator()
        // Validators.minLength(this.minLengthTitle),
        // Validators.maxLength(this.maxLengthTitle)
      ], [titleCheckingValidator(this.todoItemHttpService)]),
      completed: [true],
      userId: new FormControl('', [Validators.required], [activeUserValidator(this.httpUserService)]),

    },
      { updateOn: "blur" }
    );
  }

  ngOnInit(): void {
    this.getUsers();
  }

  setValues() {
    // this.todoItemForm.patchValue({
    //   title : "Tytuł testowy"
    // });
    this.todoItemForm.controls["title"].disable();
    this.todoItemForm.setValue({
      title: "Tytuł testowy",
      completed: true,
      userId: 4
    })
  }

  get f() {
    return this.todoItemForm.controls;
  }

  getUsers() {
    this.httpUserService.getUsers()
      .subscribe(data => {
        this.users = data;
      })
  }

  submit() {
    this.isFormInvalid = false;
    this.isSuccessfulResponse = false;

    if (this.todoItemForm.invalid) {
      this.isFormInvalid = true;
      return;
    }

    let todoItem = new TodoItem(0, this.f['title'].value, this.f['userId'].value,
      this.f['completed'].value);

    this.todoItemHttpService.postTodoItem(todoItem)
      .subscribe(_ => {
        this.isSuccessfulResponse = true;
      });
  }
}
