import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit{
  newEmployeeForm:FormGroup=new FormGroup({})

  constructor(){}

  ngOnInit(): void {
      
  }

  submitNewFormAction(){
    console.log("button pressed")
  }
}
