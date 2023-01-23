import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from 'src/app/Services/EmployeeServices/employee.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  loginForm:FormGroup=new FormGroup({})

  constructor(
    private formBuilder:FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private empService:EmployeeService,  
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
      let sentData = this.empService.loginUser(this.loginForm.value).subscribe(data=>{
        if(data){
          console.log("login success")
          this.router.navigate(['view', 5], { relativeTo: this.route });
        }
        else{
          console.log("login failed")
        }
      })
    }
    else{
      console.log("Login form does not meet requirements")
    }
    
  }
}
