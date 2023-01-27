import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
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
      "username":new FormControl("",[
        Validators.required, 
        Validators.minLength(8)
      ]),
      "fullName":new FormControl("",[Validators.required]),
      "fName":new FormControl("",[Validators.required]),
      "lName":new FormControl("",[Validators.required]),
      "address":new FormControl("",[Validators.required]),
      "contact":new FormControl("",[
        Validators.required, 
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern("^[0-9]*$")
      ]),
      "email":new FormControl("",[
        Validators.required,
        Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]),
      "department":new FormControl("",[Validators.required]),
      "password":new FormControl("", [
        Validators.required, 
        Validators.minLength(8),
        Validators.pattern("/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/")
      ]),
      "confirmPassword":new FormControl("", [
        Validators.required,
        this.passwordMatchValidation()
      ]),
    })
  }

  passwordMatchValidation():ValidatorFn{
    return (control: AbstractControl): { [key: string]: any } | null =>  
    control.value === this.newEmployeeForm.value.password 
        ? null : {wrongPassword: control.value};
  }

  submitNewFormAction(){
    console.log("submit new form button pressed")
    console.log(this.newEmployeeForm.value)
    
    // filter out confirm password as we don't need that in the database
    let employeeForm = (({
      username,
      fullName, 
      fName,
      lName,
      address,
      contact,
      email,
      department,
      password
    }) => ({
      username,
      fullName, 
      fName,
      lName,
      address,
      contact,
      email,
      department,
      password
    }))(this.newEmployeeForm.value)

    console.log(employeeForm)
  }
}
