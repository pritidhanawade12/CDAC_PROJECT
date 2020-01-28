import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit
 {

  message : string;
  ProductId:any;
  ProductName:string;
  ProductPrice:any;
  ProductDescription:string;
  data1:any;
  constructor(private service: DataService,private router:Router,public routes:ActivatedRoute,) 
  {this.router=router;   }

  ngOnInit() {
 
    var id = sessionStorage.getItem("UserId");
    if(id == null)
    {
      this.router.navigate(['/login']);
    }


    alert("Transaction Successfull !!!");

    var parameterArrivalStatus = this.routes.paramMap;

    parameterArrivalStatus.subscribe((params)=>{
     this.ProductId = params.get("ProductId");
      console.log("tushar here "+this.ProductId); });


      console.log("payment Component Loaded");
      let resultstate=this.service.GetProductById(this.ProductId);
      resultstate.subscribe((data)=>{
        console.log("data is");
         this.data1 = data['Data'][0];
         this.Order();
         
          
     });
     }




     Order()
   {

    this.ProductDescription = this.data1.ProductDescription;
    this.ProductName = this.data1.ProductName;
    this.ProductPrice = this.data1.ProductPrice;
    
    var ProductName =  this.data1.ProductName;
   
   var UserId = sessionStorage.getItem("UserId");
   var ProductId = this.ProductId
   
   console.log("session details are :: "+UserId+ProductId);




   console.log("details are : "+this.ProductDescription+"" +UserId);
     let resultstate = this.service.AddOrderDetails(UserId,this.ProductId,this.ProductDescription);
   
     resultstate.subscribe((data:any)=>
     {
       if(data.Status='Success')
       {
         console.log(data.error);   
       }
       else
       {
         console.log(data);
         this.message="something wrong !!!";
       }
   
     });
    }



}
  
   


