import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  data1;
  message;
  

  constructor(private service: DataService, public router : Router) 
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
    console.log("Plans Component Loaded")
    let resultstate=this.service.GetPlanDetails(1);
    resultstate.subscribe((data)=>{
     this.data1 = data['Data'];
      console.log("hello prit here "+this.data1)
      console.log(data);
     
    });
  }

    //console.log(this.data1);
     
    Buy(ProductId,CategoryId)
    {
      console.log(ProductId);
      console.log(CategoryId);
      sessionStorage.setItem("ProductId",ProductId);
      sessionStorage.setItem("PlansCategoryId",CategoryId)
      this.router.navigate(['/paymentform']);
    }

  }
