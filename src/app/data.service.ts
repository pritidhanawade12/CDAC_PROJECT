import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  GetData()
  {
   return this.http.get("http://localhost:53806/api/Role");
  }

  GetDataByID(ProductId)
  {
    console.log("i am updateplan service !!")
    return this.http.get("http://localhost:53806/api/Admin/"+ProductId);
  }
 
  DeleteData(ProductId)
  {
    return this.http.delete("http://localhost:53806/api/Admin/"+ProductId);
  }

UpdateData(userObject)
{
  return this.http.put("http://localhost:53806/api/Admin/UpdateProduct",userObject);
}


  GetPassHistory()
  {
   return this.http.get("http://localhost:53806/api/Login/PassHistory");
  }
  GetUserDetails()
  {
    return this.http.get("http://localhost:53806/api/Admin");
  }
  GetPlanDetails(CategoryId)
  {
    return this.http.get("http://localhost:53806/api/Plan/"+CategoryId);
  }

  GetTxDetails()
  {
    return this.http.get("http://localhost:53806/api/Order");
  }

  
  FeedBack(object)
  {
    return this.http.post("http://localhost:53806/api/Feedback",object);
  }

  GetProductById(ProductId)
  {
    return this.http.get("http://localhost:53806/api/Product/"+ProductId);
  }

  GetProductList()
  {
    return this.http.get("http://localhost:53806/api/Admin/ProductList");
  }


  GetOnlineUsers()
  {
    return this.http.get("http://localhost:53806/api/Login/OnlineUsers");
  }

  CategoryList()
  {
    return this.http.get("http://localhost:53806/api/Category");
  }

  // GetHardwareDetails()
  // {
  //   return this.http.get("http://localhost:53806/api/Plan/Hardware");
  // }

  Register(userObject)
  {
    console.log("service"+userObject);
    return this.http.post("http://localhost:53806/api/Login/Registration",userObject);
  }

  AddNewPlan(userObject)
  {
    console.log("service"+userObject);
    return this.http.post("http://localhost:53806/api/Admin",userObject);
  }

  Login(userObject)
  {
    console.log("service"+userObject);
    return this.http.post("http://localhost:53806/api/Login/",userObject);
  }

  GenerateOtp(email)
  {
    console.log("in service"+email)
    var userObject={
      "EmailId":email
    }
    console.log("service"+userObject);

    return this.http.post("http://localhost:53806/api/User/IsExist",userObject);
  }

  ValidateOtp(email,OTP)
  {
 
    var userObject={

      "EmailId":email,
      "OTP":OTP
     }
    console.log("service email"+email);
    console.log("service"+OTP);
    return this.http.post("http://localhost:53806/api/User/OTP",userObject);
  }

  ChangePassword(email,Password)
  {
    
    var userObject={
    "EmailId":email,
    "Password":Password

    }
    console.log("service"+userObject);
    return this.http.put("http://localhost:53806/api/User/UpdatePassword",userObject);
  }

  
  UpdatePassword(email,Opassword,Npassword)
  {
    
    var userObject={
      "EmailId":email,
    "Password":Opassword,
    "NPassword":Npassword

    }
    console.log("service"+userObject);
    return this.http.put("http://localhost:53806/api/User/ChangePassword",userObject);
  }

  AddOrderDetails(UserId,ProductId,ProductDescription)
  {
    var userObject={
    "UserId":UserId,
    "ProductId":ProductId,
    "OrderDetails":ProductDescription

    }
    console.log("service"+userObject);
    return this.http.post("http://localhost:53806/api/Order",userObject);

  }
   
  statusoffline(EmailId)
  {
    var userObject={
      "EmailId":EmailId

}
      console.log("service"+userObject);
      return this.http.put("http://localhost:53806/api/Login/statusoffline",userObject);

  }





}
