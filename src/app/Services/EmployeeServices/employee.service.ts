import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  // don't forget to change this if hosting it online
  baseUrl:string="http://localhost:8080/"

  loggedIn!: boolean;

  loginUser(loginObj:any){
    const loginCheck = this.http.post(this.baseUrl + "employees/login", loginObj)
    if(loginCheck!=null){
      this.loggedIn = true
    }
    return loginCheck
    
  }

  logoutUser(){
    this.loggedIn = false
  }

  viewEmployee(id:string){
    return this.http.get(this.baseUrl + "employees/" + id)
  }
}
