import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message : string;
  constructor(private service: DataService,private router:Router) 
  {this.router=router;   }

  ngOnInit() {
  }
Add(DataFromUI:any)
{
  console.log("register ts"+DataFromUI);
  let resultstate = this.service.Register(DataFromUI.form.value);

  resultstate.subscribe((data:any)=>
  {
    if(data.Status='Success')
    {
      this.message="Record Inserted !!!";
      console.log(data.error);
      this.router.navigate(['/login']);
      
      
    }
    else
    {
      //console.log(data);
      this.message="something wrong !!!";
    }

  });

}
}