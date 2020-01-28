import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-updateplan',
  templateUrl: './updateplan.component.html',
  styleUrls: ['./updateplan.component.css']
})
export class UpdateplanComponent implements OnInit {

  T_Products;
  message;

  constructor(public routes:ActivatedRoute,
              public service: DataService,
              public router: Router) 
  {
    this.message = "";  
  }

  ngOnInit() 
  {
     
    var id = sessionStorage.getItem("UserId");
    if(id == null)
    {
      this.router.navigate(['/login']);
    }
    let parameterArrivalStatus = this.routes.paramMap;

    parameterArrivalStatus.subscribe((params)=>{
      let ProductId = params.get("ProductId");
      console.log(params.get("ProductId"));
      let StatusofProductSearched= this.service.GetDataByID(ProductId);

      StatusofProductSearched.subscribe((result:any)=>{
        console.log(result);
        if(result.Status == 'Success')
        {
          console.log("i am in update ")
          this.T_Products = result.Data;
          console.log(this.T_Products.ProductName);
          // this.message = "Record found!"
          
        }
        else
        {
          this.message = "Record not found!"
        }
      }); 

    });
  }

  Update()
  {
    let statusOfUpdate= this.service.UpdateData(this.T_Products);
    statusOfUpdate.subscribe((result:any)=>{
      //console.log(result);
      if(result.Status=='Success')
      {
        this.router.navigate(['/productlist']);
      }
      else{
        this.message = "Something went wrong!";
      }
    });
  }
}
