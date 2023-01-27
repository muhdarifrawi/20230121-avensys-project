import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/Services/AdminServices/admin.service'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminLoginForm:FormGroup=new FormGroup({})
  loginError=false

  constructor(
    private formBuilder:FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private adminService:AdminService,
    private snackBar:MatSnackBar
  ){}

  ngOnInit():void{
    this.adminLoginForm=this.formBuilder.group({
      "username":new FormControl("", Validators.required),
      "password":new FormControl("", Validators.required)
    })
  }

  adminLoginAction(){
    console.log("login button working")
    if(this.adminLoginForm.valid){
      this.loginError=false
      console.log(this.adminLoginForm.value)
      this.adminService.loginAdmin(this.adminLoginForm.value).subscribe(data=>{
        if(data != null){

          this.snackBar.open("Login success!", "Dismiss",{
            duration:5000
          })
          console.log("login success")
          this.router.navigate(['employees/all']);
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
