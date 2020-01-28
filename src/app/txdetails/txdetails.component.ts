import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-txdetails',
  templateUrl: './txdetails.component.html',
  styleUrls: ['./txdetails.component.css']
})
export class TxdetailsComponent implements OnInit {
  data1;
  message;
  constructor(private service: DataService, 
    public router : Router) 
  { 
 
  }

  ngOnInit() 
  {
     
    var id = sessionStorage.getItem("UserId");
    if(id == null)
    {
      this.router.navigate(['/login']);
    }
    console.log("Txdetails Component Loaded")
    let resultstate=this.service.GetTxDetails();
    resultstate.subscribe((data)=>{
      this.data1 = data;
     
    });
    console.log(this.data1);
     
  }
}
