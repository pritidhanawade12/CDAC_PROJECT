import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Uname : any
  constructor(private router:Router,private service: DataService) { }

  ngOnInit() {

    this.Uname = sessionStorage.getItem("Uname")
    var id = sessionStorage.getItem("UserId");
    if(id == null)
    {
      this.router.navigate(['/login']);
    }
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
