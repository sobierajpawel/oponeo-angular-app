import { Component, OnInit } from '@angular/core';
import { ToastSharedService } from './toast-shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  new_title = "Oponeo Angular Application"
  isBtnDisabled = false;
  messageToasts : string[] = [];

  constructor(private toastSharedService : ToastSharedService){

  }

  ngOnInit(): void {
    this.toastSharedService.get().subscribe(message=>{
      console.log("AppComponent otrzymał wiadomość "+ message);
      this.messageToasts.push(message);
      setTimeout(()=>{
        this.messageToasts = this.messageToasts.filter(x=>x != message);
      }, 10000);
    })
  }

  onBtnClick(){
    this.new_title = "Test";
    this.isBtnDisabled = true;
  }
}
