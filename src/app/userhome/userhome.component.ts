import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  flag:number=0
  result:string;
  rdoResult:string;
  Uname:any;


  constructor(private router:Router,private service:DataService) { }

  ngOnInit() {
    
    var id = sessionStorage.getItem("UserId");
    if(id == null)
    {
      this.router.navigate(['/login']);
    }

    this.Uname = sessionStorage.getItem("Uname");
  }

  Select()
{
  console.log("hello i am priti");
  console.log(this.rdoResult);

}
Buy(ProductId)
{

console.log(ProductId);
}

logout()
{

  var EmailId = sessionStorage.getItem("UserEmail");
  console.log(EmailId);
  let resultstate = this.service.statusoffline(EmailId);


  resultstate.subscribe((data:any)=>
  {
    if(data.Status='Success')
    {
      
      delete sessionStorage["UserEmail"];
      delete sessionStorage["UserId"];
      alert("logout successfully !!");
      this.router.navigate(['/login']);
    }
    else
    {
     alert("something wrong");
    }

  });

  
}




}
