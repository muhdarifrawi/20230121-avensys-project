import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http:HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  // don't forget to change this if hosting it online
  baseUrl:string="http://localhost:8080/"

  loggedIn= false;
  admin = false;
  currentAdmin:any

  loginAdmin(loginObj:any){
    const loginCheck = this.http.post(this.baseUrl + "admin/login", loginObj)
    if(loginCheck!=null){
      this.loggedIn = true
      this.admin = true;
      this.currentAdmin = loginObj.username
    }
    return loginCheck
    
  }
}
