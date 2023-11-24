import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Toast } from './toast';

@Injectable({
  providedIn: 'root'
})
export class ToastSharedService {
  private toastSubject = new Subject<Toast>();

  constructor() { }

  send(toast : Toast){
    console.log(toast);
    this.toastSubject.next(toast);
  }

  get(){
    return this.toastSubject;
  }
}
