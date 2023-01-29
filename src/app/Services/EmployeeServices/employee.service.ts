import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { delay, Observable, of, tap } from 'rxjs';
import { AdminService } from '../AdminServices/admin.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http:HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private adminService:AdminService
  ) { }

  // don't forget to change this if hosting it online
  baseUrl:string="http://localhost:8080/"

  loggedIn= false;
  genericUser = false;

  loginUser(loginObj:any){
    const loginCheck = this.http.post(this.baseUrl + "employees/login", loginObj)
    console.log(loginCheck)
    if(loginCheck != null){
      this.loggedIn = true
      this.genericUser = true
      return loginCheck
    }
    return loginCheck
    
  }

  loginStatus(){
    return this.loggedIn
  }

  logoutUser(){
    this.loggedIn = false
    this.adminService.admin = false
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

  viewAll(){
    return this.http.get(this.baseUrl + "employees")
  }
}
