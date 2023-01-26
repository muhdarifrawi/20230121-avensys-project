import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/Services/EmployeeServices/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit{
  newEmployeeForm:FormGroup=new FormGroup({})

  constructor(
    private formBuilder:FormBuilder,
    private empService:EmployeeService,
    private _snackBar:MatSnackBar
  ){}

  ngOnInit(): void {
    this.newEmployeeForm=this.formBuilder.group({
      "fullName":new FormControl(""),
      "fName":new FormControl(""),
      "lName":new FormControl(""),
      "address":new FormControl(""),
      "contact":new FormControl(""),
      "email":new FormControl(""),
      "password":new FormControl(""),
      "confirmPassword":new FormControl(""),
    })
  }

  submitNewFormAction(){
    console.log("submit new form button pressed")
    console.log(this.newEmployeeForm.value)
  }
}
