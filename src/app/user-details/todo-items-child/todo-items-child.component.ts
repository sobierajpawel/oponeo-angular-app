import { Component, Input } from '@angular/core';
import { TodoItem } from 'src/app/todo-item';
import { TodoModeEnum } from 'src/app/todo-item-mode';

@Component({
  selector: 'app-todo-items-child',
  templateUrl: './todo-items-child.component.html',
  styleUrls: ['./todo-items-child.component.css']
})
export class TodoItemsChildComponent {
  private _items: TodoItem[] = [];
  private _copyItems: TodoItem[] = [];

  @Input()
  set items(values: TodoItem[]) {
    this._items = values;
    this._copyItems = values;
  }

  get items() {
    return this._items;
  }

  modes = [{ value: TodoModeEnum.ALL, desc: 'Pokaż wszystkie' },
  { value: TodoModeEnum.COMPLETE, desc: 'Zakończone' },
  { value: TodoModeEnum.INCOMPLETE, desc: 'Niezakończone' }];

  selectedMode: any;

  changeMode() {
    console.log(this.selectedMode);
    if (this.selectedMode == TodoModeEnum.ALL) {
      this._items = this._copyItems;
    } else if (this.selectedMode == TodoModeEnum.COMPLETE) {
      this._items = this._copyItems.filter(x=>x.completed);
    } else if (this.selectedMode == TodoModeEnum.INCOMPLETE) {
      this._items = this._copyItems.filter(x=>!x.completed);
    }
  }
}
