import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';

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
      "username":new FormControl(""),
      "password":new FormControl("")
    })
  }

  loginAction(){
    console.log("login button working")
    console.log(this.loginForm.value)
  }
}
