import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
p:any
  constructor(private service : DataService, private router: Router) { }

  ngOnInit() 
  {
    this.p = sessionStorage.getItem("UserEmail");
    console.log(this.p);
  }

  Add(DataFromUI:any)
{
  
  let resultstate = this.service.FeedBack(DataFromUI.form.value);

  resultstate.subscribe((data:any)=>
  {
    if(data.Status='Success')
    {
      console.log(data);
      console.log(data.error);
      
      alert("feedback successfully send !!");
      this.router.navigate(['/userhome']);
      
    }
    else
    {
      console.log(data.error);
      
    }

  });

}
}
