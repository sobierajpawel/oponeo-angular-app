import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpTodoItemsService {

  constructor(private httpClient : HttpClient) { }

  getTodoItems(userId : number) : Observable<TodoItem[]>{
    let url = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;   

    return this.httpClient.get<TodoItem[]>(url);
  }
}
