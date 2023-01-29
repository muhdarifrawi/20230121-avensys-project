import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/Services/AdminServices/admin.service';
import { EmployeeService } from 'src/app/Services/EmployeeServices/employee.service';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit{
  userId:string = ""
  admin = this.adminService.admin

  constructor(
    private activatedRoute:ActivatedRoute,
    private empService:EmployeeService,
    private snackBar:MatSnackBar,
    private router:Router,
    private adminService:AdminService
    ){}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data=>{
      this.userId=data["id"]
    })

  }

  deleteEmployeeAction(){
    console.log("Deleting employee ...")
    this.empService.deleteEmployee(this.userId).subscribe(data => {
          console.log("employee deleted")
          this.snackBar.open("User deleted successfully!", "Dismiss")
          
    })
    if(this.admin){
      this.router.navigate(['../admin/all']);
    }
    else{
      this.router.navigate(['../view',this.userId]);
    }
    
  }
}
