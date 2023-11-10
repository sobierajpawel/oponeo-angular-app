import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-information-user-child',
  templateUrl: './information-user-child.component.html',
  styleUrls: ['./information-user-child.component.css']
})
export class InformationUserChildComponent {
  @Input() fullName: string = "";
  @Input() id: number = 0;
  @Input() email: string = "";
  @Input() website: string = "";
  @Input() phone: string = "";
}
