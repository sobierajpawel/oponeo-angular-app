import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpTodoItemsService } from 'src/app/http-todo-items.service';
import { HttpUsersService } from 'src/app/http-users.service';
import { TodoItem } from 'src/app/todo-item';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-details-parent',
  templateUrl: './user-details-parent.component.html',
  styleUrls: ['./user-details-parent.component.css']
})
export class UserDetailsParentComponent {
  user: User = new User(1, "", "", "", "", false);
  todoItems: TodoItem[] = [];

  constructor(private userHttpService: HttpUsersService, private activatedRoute: ActivatedRoute,
    private router: Router, private todoItemsHttpService: HttpTodoItemsService, private location : Location) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      let id = param["id"];

      this.getUserData(id);
      this.getTodoItems(id);
    })
  }

  getUserData(id: number) {
    this.userHttpService.getUser(id)
      .subscribe(data => {
        this.user = data;
      });
  }

  getTodoItems(id: number) {
    this.todoItemsHttpService.getTodoItems(id)
      .subscribe(data => {
        this.todoItems = data;
      });
  }

  goToEdit() {
    this.router.navigate(["/edit-users/", this.user.id]);
  }

  goBack(){
    this.location.back();
  }
}
