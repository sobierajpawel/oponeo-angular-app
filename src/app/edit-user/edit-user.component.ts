import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
 
  constructor(private activatedRoute : ActivatedRoute){

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
      let id = param["id"];

      console.log(id);
    })
    
  }

}
