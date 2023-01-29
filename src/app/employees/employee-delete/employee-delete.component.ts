import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/EmployeeServices/employee.service';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit{
  userId:string = ""

  constructor(
    private activatedRoute:ActivatedRoute,
    private empService:EmployeeService,
    private snackBar:MatSnackBar,
    private router:Router
    ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.userId=data["id"]
    })

    // if(this.userId !== ""){
    //   this.load = true
    // }
    // else{
    //   this.router.navigate(['../employees/all']);
    // }
  }

  deleteEmployeeAction(){
    console.log("Deleting employee ...")
    this.empService.deleteEmployee(this.userId).subscribe(data => {
          console.log("employee deleted")
          this.snackBar.open("User deleted successfully!", "Dismiss")
          
    })
    this.router.navigate(['../employees/all']);
  }
}
