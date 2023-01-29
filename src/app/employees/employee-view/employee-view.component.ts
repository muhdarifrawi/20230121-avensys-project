import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/Services/AdminServices/admin.service';
import { EmployeeService } from 'src/app/Services/EmployeeServices/employee.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit{
  constructor(
    private empService:EmployeeService,
    private activatedRoute:ActivatedRoute,
    private adminService:AdminService
    ){}

  employeeId:any
  employeeDetails:any
  admin = this.adminService.admin

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      console.log(data["id"])

      this.employeeId = data["id"]
    }
  )
    this.empService.viewEmployee(this.employeeId).subscribe((data)=>{
      console.log(data)
      this.employeeDetails = data
    }
  )
  }
}
