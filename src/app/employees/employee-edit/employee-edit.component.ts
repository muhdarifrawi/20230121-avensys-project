import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/EmployeeServices/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {
  editEmployeeForm:FormGroup=new FormGroup({})
  hide = true
  userId:any;
  userDetails:any;
  load:boolean = false;

  constructor(
    private formBuilder:FormBuilder,
    private empService:EmployeeService,
    private snackBar:MatSnackBar,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private route:ActivatedRoute
    ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: { [x: string]: any; }) => {
      this.userId = data["id"]
    })
    if(this.userId!==""){
      this.empService.viewEmployee(this.userId)
      .toPromise()
      .then(data => {
        this.userDetails=data
        console.log(data)
      
        this.editEmployeeForm=this.formBuilder.group({
          "username":new FormControl(this.userDetails.username,[
            Validators.required, 
            Validators.minLength(8)
          ]),
          "fullName":new FormControl(this.userDetails.fullName,[Validators.required]),
          "fName":new FormControl(this.userDetails.lName,[Validators.required]),
          "lName":new FormControl(this.userDetails.lName,[Validators.required]),
          "address":new FormControl(this.userDetails.address,[Validators.required]),
          "contact":new FormControl(this.userDetails.contact,[
            Validators.required, 
            Validators.minLength(8),
            Validators.maxLength(8),
            Validators.pattern("^[0-9]*$")
          ]),
          "email":new FormControl(this.userDetails.email,[
            Validators.required,
            Validators.email,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
          ]),
          "department":new FormControl(this.userDetails.department,[Validators.required]),
          "password":new FormControl(this.userDetails.password, [
            Validators.required, 
            Validators.minLength(8),
            this.passwordMinComplexityValidation()
          ]),
          "confirmPassword":new FormControl(this.userDetails.password, [
            Validators.required,
            this.passwordMatchValidation()
          ]),
        })
      
        this.load = true
      })
    }
    
  }

  passwordMatchValidation():ValidatorFn{
    return (control: AbstractControl): { [key: string]: any } | null =>  
    control.value === this.editEmployeeForm.value.password 
        ? null : {wrongPassword: control.value};
  }

  passwordMinComplexityValidation():ValidatorFn{
    let capsLetter = /([A-Z]+)/g
    let minNumber = /([0-9]+)/g
    // let validSymbols = /(?=.*\W)/g
    return (control: AbstractControl): { [key: string]: any } | null =>  
    capsLetter.test(control.value) && minNumber.test(control.value)
        ? null : {weakPassword: control.value};
  }

  submitEditFormAction(){
    console.log("button pressed")

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
    }))(this.editEmployeeForm.value)

    this.empService.updateEmployee(this.userId, employeeForm).subscribe(data => {
      console.log("sent data: ", data)
      this.snackBar.open("Employee added successfully!", "Dismiss")
      
    })

    this.router.navigate(['../employees/view', this.userId]);
  }
}
