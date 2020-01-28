import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  flag:number=0;
  message : string;
  email:string;
  OTP:string;
  Password:string;
  cpassword:string;
  constructor(private service: DataService,private router:Router) 
  {this.router=router;   }

  ngOnInit() {
     
 
  
  }

  GenerateOtp()
{
  console.log("change password ts" +this.email);
  let resultstate = this.service.GenerateOtp(this.email);

  resultstate.subscribe((data:any)=>
  {
    if(data.Status='Success')
    {
     this.flag=1;
      console.log(data.error);   
    }
    else
    {
      console.log(data);
      this.message="something wrong !!!";
    }

  });}

ValidateOtp()
{
  console.log("change password ts"+this.OTP);
  let resultstate = this.service.ValidateOtp(this.email,this.OTP);

  resultstate.subscribe((data:any)=>
  {
    if(data.Status='Success')
    {
     this.flag=2;
      console.log(data.error);   
    }
    else
    {
      console.log(data);
      this.message="something wrong !!!";
    }

  });}

  ChangePassword()
{
  console.log("change password ts"+this.Password);
  let resultstate = this.service.ChangePassword(this.email,this.Password);

  resultstate.subscribe((data:any)=>
  {
    if(data.Status='Success')
    {
     this.flag=2;
      console.log(data.error);   
    }
    else
    {
      console.log(data);
      this.message="something wrong !!!";
    }

  });}

}
