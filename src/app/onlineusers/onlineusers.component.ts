import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onlineusers',
  templateUrl: './onlineusers.component.html',
  styleUrls: ['./onlineusers.component.css']
})
export class OnlineusersComponent implements OnInit {

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
    if(id == null)
    {
      this.router.navigate(['/login']);
    }
    console.log("Online Users Component Loaded")
    let resultstate=this.service.GetOnlineUsers();
    resultstate.subscribe((data)=>{
      console.log("data in onlineusers is "+data['Data']);
      this.data1 = data['Data'];
     
    });
    console.log(this.data1);
     
  }

}
