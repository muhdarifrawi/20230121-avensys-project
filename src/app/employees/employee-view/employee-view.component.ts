import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/Services/EmployeeServices/employee.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit{
  constructor(
    private empService:EmployeeService,
    private activatedRoute:ActivatedRoute
    ){}

  employeeId:any
  employeeDetails:any

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
