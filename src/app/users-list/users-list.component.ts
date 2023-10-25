import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpUsersService } from '../http-users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  isErrorOccured = false;
  isTableOptionVisible = true;

  constructor(private httpUserService: HttpUsersService) {

  }

  ngOnInit(): void {
    this.httpUserService.getUsers()
      .subscribe({
        next: data => {
          this.users = data;
        },
        error: _ => {
          this.isErrorOccured = true;
        },
        complete: () => {

        }
      })
  }

  getCssClass(user: User): Record<string, boolean> {
    return {
      'table-danger': !user.isActive,
      'table-warning': user.id === 1 || user.fullName === "Jan Test"
    }
  }

  changeDisplay(){
    this.isTableOptionVisible = !this.isTableOptionVisible;
  }
}
