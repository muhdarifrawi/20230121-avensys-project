import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {
  editEmployeeForm:FormGroup=new FormGroup({})

  constructor(){}

  ngOnInit(): void {
      
  }

  submitEditFormAction(){
    console.log("button pressed")
  }
}
