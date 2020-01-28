import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  data1;
  message;
  constructor(private service: DataService, 
    public router : Router) 
  { 
  console.log("passhistory.Component.JS:passhistory Component Created");
  }

  ngOnInit() 
  {
     
    var id = sessionStorage.getItem("UserId");
    console.log(id);
    if(id == null)
    {
     
      this.router.navigate(['/login']);
    }
    console.log("PassHistory Component Loaded")
    let resultstate=this.service.GetUserDetails();
    resultstate.subscribe((data)=>{
      this.data1 = data;
     
    });
    console.log(this.data1);
     
  }


}
