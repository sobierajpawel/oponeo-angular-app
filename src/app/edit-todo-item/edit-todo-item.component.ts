import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpTodoItemsService } from '../http-todo-items.service';
import { HttpUsersService } from '../http-users.service';
import { User } from '../user';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-edit-todo-item',
  templateUrl: './edit-todo-item.component.html',
  styleUrls: ['./edit-todo-item.component.css']
})
export class EditTodoItemComponent implements OnInit{
    editTodoForm : FormGroup;
    users : User[] = [];
    minLengthValue = 5;
    isValidationError = false;
    todoItemId : number = 0;

  constructor(private fb : FormBuilder, private activatedRoute : ActivatedRoute, 
    private httpTodoItemService : HttpTodoItemsService,
    private httpUserService : HttpUsersService){
    this.editTodoForm = this.fb.group({
      title : ['', [Validators.required, Validators.minLength(this.minLengthValue)]],
      completed : new FormControl(),
      userId: new FormControl()
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
      let id = param["todo_id"];
      this.todoItemId = id;
      // console.log(id);
      this.getUsers();

      this.getTodoItem(id);
    })
  }

  getUsers(){
    this.httpUserService.getUsers().subscribe(data=>{
      this.users = data;
    });
  }

  getTodoItem(id : number){
    this.httpTodoItemService.getTodoItem(id).subscribe(data=>{
      this.editTodoForm.setValue({
        title: data.title,
        completed : data.completed,
        userId : data.userId
      });
      
      if (data.completed){
        this.disableControls();
      }
    })
  }

  disableControls(){
    this.editTodoForm.controls["title"].disable();
    this.editTodoForm.controls["completed"].disable();
    this.editTodoForm.controls["userId"].disable();
  }

  submit(){
    this.isValidationError = false;

    if (this.editTodoForm.invalid){
      this.isValidationError = true;
      return;
    }

    let title = this.editTodoForm.controls["title"].value;
    let completed = this.editTodoForm.controls["completed"].value;
    let userId = this.editTodoForm.controls["userId"].value;

    let todoItem = new TodoItem(this.todoItemId,title,userId, completed);

    this.httpTodoItemService.putTodoItem(todoItem).subscribe(_=>{
      alert('Zaktualizowano zadanie do realizacji!');
    });
  }
}
