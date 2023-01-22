import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  loginForm:FormGroup=new FormGroup({})

  constructor(
    private formBuilder:FormBuilder
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
      console.log(this.loginForm.value)
    }
    else{
      console.log("Login form does not meet requirements")
    }
    
  }
}
