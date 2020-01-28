import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { Router, RouterModule } from '@angular/router';
//import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { MywebComponent } from './myweb/myweb.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { PasshistoryComponent } from './passhistory/passhistory.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { PlansComponent } from './plans/plans.component';
import { HardwareComponent } from './hardware/hardware.component';
import { PaymentformComponent } from './paymentform/paymentform.component';
import { NewplanComponent } from './newplan/newplan.component';
import { UpdateplanComponent } from './updateplan/updateplan.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { PaymentComponent } from './payment/payment.component';
import { TxdetailsComponent } from './txdetails/txdetails.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { OnlineusersComponent } from './onlineusers/onlineusers.component';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    MywebComponent,
    ChangepasswordComponent,
    PasshistoryComponent,
    UserlistComponent,
    UserhomeComponent,
    ResetpasswordComponent,
    PlansComponent,
    HardwareComponent,
    PaymentformComponent,
    NewplanComponent,
    UpdateplanComponent,
    ProductListComponent,
    UpdatepasswordComponent,
    CategorylistComponent,
    PaymentComponent,
    TxdetailsComponent,
    FeedbackComponent,
    OnlineusersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

  //  AppRoutingModule,
    RouterModule.forRoot([
      {path: "home", component: HomeComponent},
      {path: "register", component: RegisterComponent},
      {path: "about", component: AboutComponent},
      {path: "contact", component: ContactComponent},
      {path: "login", component: LoginComponent},
      {path: "changepassword", component: ChangepasswordComponent},
      {path: "passhistory", component:PasshistoryComponent},
      {path: "userlist", component:UserlistComponent},
      {path: "userhome", component:UserhomeComponent},
      {path: "plans", component:PlansComponent},
      {path: "hardware", component:HardwareComponent},
      {path: "paymentform/:ProductId", component:PaymentformComponent},
      {path: "newplan/:CategoryId", component:NewplanComponent},
      {path: "updateplan/:ProductId", component:UpdateplanComponent},
      {path: "productlist", component:ProductListComponent},
      {path: "updatepassword", component:UpdatepasswordComponent},
      {path: "categorylist", component:CategorylistComponent},
      {path: "payment/:ProductId", component:PaymentComponent},
      {path: "txdetails", component:TxdetailsComponent},
      {path: "feedback", component:FeedbackComponent},
      {path: "onlineusers", component:OnlineusersComponent},
      {path: "**", component: MywebComponent},
      

    ])
  ],
  providers: [HttpClientModule, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("App.Module.JS: App Module Created");
  }

}
