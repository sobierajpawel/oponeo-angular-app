import { Component, Input } from '@angular/core';
import { Toast } from '../toast';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  @Input()
  toast! : Toast ;
}
