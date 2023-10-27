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
  copyUsers: User[] = [];
  isErrorOccured = false;
  isTableOptionVisible = true;
  removedUser = "";

  constructor(private httpUserService: HttpUsersService) {

  }

  ngOnInit(): void {
    this.httpUserService.getUsers()
      .subscribe({
        next: data => {
          this.users = data;
          this.copyUsers = data;
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

  changeDisplay() {
    this.isTableOptionVisible = !this.isTableOptionVisible;
  }

  search(searchPhrase: string) {
    this.users = this.copyUsers
      .filter(x => x.fullName!.toLowerCase().includes(searchPhrase.toLowerCase()) ||
        x.email!.toLowerCase().includes(searchPhrase.toLowerCase()));
  }

  deleteUser(id: number) {
    this.httpUserService.deleteUser(id)
      .subscribe(() => {
        this.removedUser = this.users.find(x=>x.id === id)!.fullName!;
        this.users = this.users.filter(x=>x.id !== id);
        this.copyUsers = this.copyUsers.filter(x=>x.id !== id);
      });
  }
}
