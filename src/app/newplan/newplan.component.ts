import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newplan',
  templateUrl: './newplan.component.html',
  styleUrls: ['./newplan.component.css']
})
export class NewplanComponent implements OnInit {
  message : string;
  CategoryId:any;
  constructor(private service: DataService,private router:Router,public routes:ActivatedRoute,) 
  {this.router=router;   }

  ngOnInit() {
     
    var id = sessionStorage.getItem("UserId");
    if(id == null)
    {
      this.router.navigate(['/login']);
    }

    var parameterArrivalStatus = this.routes.paramMap;

    parameterArrivalStatus.subscribe((params)=>{
     this.CategoryId = params.get("CategoryId");
      console.log("tushar here "+this.CategoryId)

    });




  }
Add(DataFromUI:any)
{
  console.log("register ts"+DataFromUI);
  let resultstate = this.service.AddNewPlan(DataFromUI.form.value);

  resultstate.subscribe((data:any)=>
  {
    if(data.Status='Success')
    {
      
      alert("Product added successfully !!");
      this.router.navigate(['/productlist']);
      
      
    }
    else
    {
      //console.log(data);
      this.message="something wrong !!!";
    }

  });

}
}
