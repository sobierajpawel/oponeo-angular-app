import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons-child',
  templateUrl: './buttons-child.component.html',
  styleUrls: ['./buttons-child.component.css']
})
export class ButtonsChildComponent {
  @Output()
  editBtnEmitter = new EventEmitter();
  @Output()
  backBtnEmitter = new EventEmitter();

  editBtnClick(){
    this.editBtnEmitter.emit();
  }

  backBtnClick(){
    this.backBtnEmitter.emit();
  }
}
