import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/Services/EmployeeServices/employee.service';

@Component({
  selector: 'app-employee-all',
  templateUrl: './employee-all.component.html',
  styleUrls: ['./employee-all.component.css']
})
export class EmployeeAllComponent implements OnInit {
  allEmployees: any;
  columnDisplay: string[] = ['id', 'username', 'fullName', 'email']
  constructor(
    private empService:EmployeeService,
    private activatedRoute:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.empService.viewAll().subscribe((data)=>{
      console.log(data)
      this.allEmployees = data
    }
  )
  }
}
