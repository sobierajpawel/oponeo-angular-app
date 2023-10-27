import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpUsersService {
  private url ="https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<any[]>(this.url)
      .pipe(map(data => data.map(item =>
        new User(item.id, item.name, item.email, item.phone,
          item.website, item.id % 2 === 0))));
  }

  deleteUser(id : number){
    let deleteUrl = `${this.url}/${id}`;
    return this.httpClient.delete(deleteUrl);
  }
}
