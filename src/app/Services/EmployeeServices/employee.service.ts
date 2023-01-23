import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  // don't forget to change this if hosting it online
  baseUrl:string="http://localhost:8080/"

  loginUser(loginObj:any){
    return this.http.post(this.baseUrl + "employees/login", loginObj)
  }

  viewEmployee(id:string){
    return this.http.get(this.baseUrl + "employees/" + id)
  }
}
