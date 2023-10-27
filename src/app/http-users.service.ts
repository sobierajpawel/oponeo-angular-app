import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpUsersService {
  private url = "https://jsonplaceholder.typicode.com/users";
  private localUsers: User[] = [];
  private id = 11;

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<any[]>(this.url)
      .pipe(map(data => data.map(item =>
        new User(item.id, item.name, item.email, item.phone,
          item.website, item.id % 2 === 0))))
      .pipe(map(users =>{
        return [...users,...this.localUsers];
      }))
  }

  getUser(id : number){
    let getUserUrl = `${this.url}/${id}`;

    return this.httpClient.get<any>(getUserUrl)
    .pipe(map(item =>
      new User(item.id, item.name, item.email, item.phone,
        item.website, item.id % 2 === 0)));
  }

  deleteUser(id: number) {
    let deleteUrl = `${this.url}/${id}`;
    return this.httpClient.delete(deleteUrl);
  }

  postUser(user: User) {
    const mappedUser = {
      "name": user.fullName,
      "email": user.email,
      "id": user.id,
      "phone": user.phone,
      "website": user.website
    }

    return this.httpClient.post<User>(this.url, mappedUser)
      .pipe(tap(_ => {
        user.id = this.id
        this.localUsers.push(user);
        this.id++;
      }));
  }

  putUser(user : User){
    const mappedUser = {
      "name": user.fullName,
      "email": user.email,
      "id": user.id,
      "phone": user.phone,
      "website": user.website
    }

    let updateUrl = `${this.url}/${user.id}`;
    return this.httpClient.put<User>(updateUrl, mappedUser);
  }
}
