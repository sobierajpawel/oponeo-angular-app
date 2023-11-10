import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpUsersService } from 'src/app/http-users.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-details-parent',
  templateUrl: './user-details-parent.component.html',
  styleUrls: ['./user-details-parent.component.css']
})
export class UserDetailsParentComponent {
  user : User = new User(1,"","","","",false);

  constructor(private userHttpService : HttpUsersService, private activatedRoute : ActivatedRoute,
    private router : Router){

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      let id = param["id"];

      this.userHttpService.getUser(id)
        .subscribe(data => {
          this.user = data;
        })
    })

  }

  goToEdit(){
    this.router.navigate(["/edit-users/",this.user.id]);
  }
}
