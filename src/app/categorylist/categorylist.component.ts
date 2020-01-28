import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
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

    console.log("categorylist Component Loaded")
    let resultstate=this.service.CategoryList();
    resultstate.subscribe((data)=>{
      console.log("Hello , i am priti");
      console.log(data);
      this.data1 = data['Data'];
     
    });
    console.log(this.data1);
 }


}
