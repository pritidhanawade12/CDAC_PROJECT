import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message : string;
  id : any;
  constructor(private service: DataService,private router:Router, private translateservice: TranslateService) 
  {this.router=router;  
  
    translateservice.addLangs(["en", "ge", "hi"]);
    translateservice.setDefaultLang("en");
  }

  ngOnInit() {
    
  }

  switchLanguage(language: string)
  {
    this.translateservice.use(language);
  }

Add(DataFromUI:any)
{
  console.log("login ts"+DataFromUI);
  let resultstate = this.service.Login(DataFromUI.form.value);
  

  resultstate.subscribe((data:any)=>
  {
    

    // console.log("user email is"+p);
    // console.log(this.id);
    // console.log(data)
    if(data.Status=='Success')
    {
      alert("hello"+data.Data.Name+" "+"Login Successful !!");
      sessionStorage.setItem("UserEmail",data.Data.EmailId);
    //  sessionStorage.setItem("UserName",data.Data.Name);
      sessionStorage.setItem("UserId",data.Data.UserId);
      var p =  sessionStorage.getItem("UserEmail");
      sessionStorage.setItem("Uname",data.Data.Name)
      this.id = data.Data.RoleId;
      console.log(data.Status);
      if(this.id == 1)
      {
        this.router.navigate(['/home']);

      }
      else
      {
        this.router.navigate(['/userhome']);

      }
    }
    else
    {
      //console.log(data);
      console.log("hello i m priti");
      alert("Incorrect Email or Password");
    }

  });

}

}
