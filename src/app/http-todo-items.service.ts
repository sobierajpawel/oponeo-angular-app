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

  getTodoItem(id : number){
    let url = `https://jsonplaceholder.typicode.com/todos/${id}`; 
    return this.httpClient.get<TodoItem>(url);
  }

  getTodoItemByTitle(title : string){
    let url = `https://jsonplaceholder.typicode.com/todos?title=${title}`;
    return this.httpClient.get<TodoItem[]>(url); 
  }

  postTodoItem(todoItem : TodoItem){
    let url = "https://jsonplaceholder.typicode.com/todos";
    return this.httpClient.post<TodoItem>(url,todoItem);
  }

  putTodoItem(todoItem : TodoItem){
    let url = `https://jsonplaceholder.typicode.com/todos/${todoItem.id}`;
    return this.httpClient.put<TodoItem>(url,todoItem);
  }
}
