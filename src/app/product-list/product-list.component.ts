import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
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
    console.log("productlist Component Loaded")
    let resultstate=this.service.GetProductList();
    resultstate.subscribe((data)=>{
      this.data1 = data;
     
    });
    console.log(this.data1);
 }

 Delete(ProductId)
  {
    console.log(ProductId);
    let statusOfDelete= this.service.DeleteData(ProductId);
    statusOfDelete.subscribe((result:any)=>{
      if(result.Status=='Success')
      {
        alert("Product Deleted Successfully !!");
        this.router.navigate(['/productlist']);
      }
      else
      {
        alert("Something Went Wrong !!");
      }
    });
  }


}
