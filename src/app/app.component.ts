import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  new_title = "Oponeo Angular Application"
  isBtnDisabled = false;

  onBtnClick(){
    this.new_title = "Test";
    this.isBtnDisabled = true;
  }
}
