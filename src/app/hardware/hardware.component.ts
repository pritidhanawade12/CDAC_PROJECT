import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.css']
})
export class HardwareComponent implements OnInit {
  data2;
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
    console.log("Hardware Component Loaded")
    let resultstate=this.service.GetPlanDetails(2);
    resultstate.subscribe((data)=>{
      this.data2 = data['Data'];
     
    });
    console.log(this.data2);
     
  }

 

}
