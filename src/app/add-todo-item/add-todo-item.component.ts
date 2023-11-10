import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpUsersService } from '../http-users.service';
import { User } from '../user';
import { TodoItem } from '../todo-item';
import { HttpTodoItemsService } from '../http-todo-items.service';

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
    private todoItemHttpService : HttpTodoItemsService) {
    this.todoItemForm = this.formBuilder.group({
      title: new FormControl('Domyślny tytuł', [Validators.required,
      Validators.minLength(this.minLengthTitle),
      Validators.maxLength(this.maxLengthTitle)]),
      completed: [false],
      userId: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.getUsers();
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
      .subscribe(_=>{
        this.isSuccessfulResponse = true;
      });
  }
}
