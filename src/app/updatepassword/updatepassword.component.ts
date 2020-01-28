import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {
  message : string;
  email:string;
  Opassword:string;
  Npassword:string;
  Cpassword:string;
  constructor(private service: DataService,private router:Router) 
  {this.router=router;   }

  ngOnInit() {
     
    var id = sessionStorage.getItem("UserId");
    if(id == null)
    {
      this.router.navigate(['/login']);
    }
  }

 
  ChangePassword()
{
  this.email = sessionStorage.getItem("UserEmail");
  console.log("change password ts"+this.Opassword+this.email);
  let resultstate = this.service.UpdatePassword(this.email,this.Opassword,this.Npassword);

  resultstate.subscribe((data:any)=>
  {
    if(data.Status=='Success')
    {
      alert("Password Changed Successfully !!") ;
      this.router.navigate(['/login']);
    }
    else
    {
      alert("Enter correct data !!") ;
      console.log(data);
      this.message="something wrong !!!";
    }

  });}


}
 