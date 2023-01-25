import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from 'src/app/Services/EmployeeServices/employee.service';

import {env} from "src/env/env";

import * as jwt from "jsonwebtoken";

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  loginForm:FormGroup=new FormGroup({})
  loginError=false

  constructor(
    private formBuilder:FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private empService:EmployeeService,
    private snackBar:MatSnackBar
  ){}

  ngOnInit():void{
    this.loginForm=this.formBuilder.group({
      "username":new FormControl("", Validators.required),
      "password":new FormControl("", Validators.required)
    })
  }

  get loginFormControl(){
    return this.loginForm.controls
  }

  loginAction(){
    console.log("login button working")
    if(this.loginForm.valid){
      this.loginError=false
      console.log(this.loginForm.value)
      this.empService.loginUser(this.loginForm.value).subscribe(data=>{
        if(data != null){

          const jwtBearerToken = jwt.sign({foo:"bar"}, env.PRIVATE_KEY, {
            algorithm: 'RS256',
            expiresIn: 15
          })

          this.snackBar.open("Login success!", "Dismiss",{
            duration:5000
          })
          console.log("login success")
          this.router.navigate(['view', data], { relativeTo: this.route });
        }
        else{
          this.snackBar.open("Username/password incorrect", "Dismiss",{
            duration:5000
          })
          console.log("login failed")
        }
      })
    }
    else{
      console.log("Login form does not meet requirements")
    }
    
  }

  

}
