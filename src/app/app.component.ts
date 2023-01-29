import { Component, OnInit} from '@angular/core';
import { AdminService } from './Services/AdminServices/admin.service';
import { AuditService } from './Services/AuditServices/audit.service';
import { EmployeeService } from './Services/EmployeeServices/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'avensys-empmansys';
  loggedIn = this.empService.loginStatus()
  constructor(
    private empService:EmployeeService,
    private adminService:AdminService,
    private auditService:AuditService
    ){}

  

  ngOnInit(): void {
    
  }
  logoutAction(){
    console.log("logged out")
    if(this.adminService.admin){
      this.auditService.addAudit({
        "action": this.adminService.currentAdmin + " logged out",
        "editor": this.adminService.currentAdmin
      }).subscribe()
    }
    else{
      this.auditService.addAudit({
        "action": this.empService.currentEmp + " logged out",
        "editor": this.empService.currentEmp
      }).subscribe()
    }
    
    this.empService.logoutUser()
  }

}
