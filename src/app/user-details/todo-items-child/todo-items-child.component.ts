import { Component, Input } from '@angular/core';
import { TodoItem } from 'src/app/todo-item';

@Component({
  selector: 'app-todo-items-child',
  templateUrl: './todo-items-child.component.html',
  styleUrls: ['./todo-items-child.component.css']
})
export class TodoItemsChildComponent {
  @Input()
  items : TodoItem[] = [];
}
