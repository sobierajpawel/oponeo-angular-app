import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastSharedService {
  private toastSubject = new Subject<string>();

  constructor() { }

  send(message : string){
    this.toastSubject.next(message);
  }

  get(){
    return this.toastSubject;
  }
}
