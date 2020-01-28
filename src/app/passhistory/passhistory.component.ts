import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-passhistory',
  templateUrl: './passhistory.component.html',
  styleUrls: ['./passhistory.component.css']
})
export class PasshistoryComponent implements OnInit {

  
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
    console.log("PassHistory Component Loaded")
    let resultstate=this.service.GetPassHistory();
    resultstate.subscribe((data)=>{
      this.data1 = data;
     
    });
    console.log(this.data1);
     
  }

}
