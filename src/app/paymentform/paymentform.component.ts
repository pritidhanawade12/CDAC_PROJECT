import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paymentform',
  templateUrl: './paymentform.component.html',
  styleUrls: ['./paymentform.component.css']
})
export class PaymentformComponent implements OnInit {
  message : string;
  ProductId:any;
  constructor(private service: DataService,private router:Router,public routes:ActivatedRoute,) 
  {this.router=router;   }

  ngOnInit() {
     
    var id = sessionStorage.getItem("UserId");
    if(id == null)
    {
      this.router.navigate(['/login']);
    }

    var parameterArrivalStatus = this.routes.paramMap;
    console.log("status is "+parameterArrivalStatus);

    parameterArrivalStatus.subscribe((params)=>{
     this.ProductId = params.get("ProductId");
      console.log("tushar here "+this.ProductId);

    });

}
}