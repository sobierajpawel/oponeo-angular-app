import { Component, OnInit } from '@angular/core';
import { ToastSharedService } from './toast-shared.service';
import { Toast } from './toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  new_title = "Oponeo Angular Application"
  isBtnDisabled = false;
  messageToasts : Toast[] = [];

  constructor(private toastSharedService : ToastSharedService){

  }

  ngOnInit(): void {
    this.toastSharedService.get().subscribe(toast=>{
      
      this.messageToasts.push(toast);
      setTimeout(()=>{
        this.messageToasts = this.messageToasts.filter(x=>x.guid != toast.guid);
      }, 10000);
    })
  }

  onBtnClick(){
    this.new_title = "Test";
    this.isBtnDisabled = true;
  }
}
