import { Component, OnInit} from '@angular/core';
import { EmployeeService } from './Services/EmployeeServices/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'avensys-empmansys';
  loggedIn = this.empService.loginStatus()
  constructor(private empService:EmployeeService){}

  

  ngOnInit(): void {
    
  }
  logoutAction(){
    console.log("logged out")
    this.empService.logoutUser()
  }

}
