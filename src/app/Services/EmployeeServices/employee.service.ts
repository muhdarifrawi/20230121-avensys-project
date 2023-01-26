import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http:HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  // don't forget to change this if hosting it online
  baseUrl:string="http://localhost:8080/"

  loggedIn= true;

  loginUser(loginObj:any){
    const loginCheck = this.http.post(this.baseUrl + "employees/login", loginObj)
    if(loginCheck!=null){
      this.loggedIn = true
    }
    return loginCheck
    
  }

  logoutUser(){
    this.loggedIn = false
    this.router.navigate(["employees"], { relativeTo: this.route })
  }

  viewEmployee(id:string){
    return this.http.get(this.baseUrl + "employees/" + id)
  }

  addEmployee(empInfo:any){
    return this.http.post(this.baseUrl + "employees/add", empInfo)
  }

  deleteEmployee(id:string){
    return this.http.delete(this.baseUrl + "employees/delete/" + id)
  }

  updateEmployee(id:string, empInfo:any){
    return this.http.put(this.baseUrl + "employees/update/" + id, empInfo)
  }
}
