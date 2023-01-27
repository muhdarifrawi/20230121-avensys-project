import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeAllComponent } from './employee-all/employee-all.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';

// material ui
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    EmployeeLoginComponent,
    EmployeeAllComponent,
    EmployeeViewComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    EmployeeDeleteComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule, 
    ReactiveFormsModule,
    MatSelectModule,
  ],
  exports:[
    EmployeeLoginComponent,
    EmployeeAllComponent,
    EmployeeViewComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    EmployeeDeleteComponent
  ]
})
export class EmployeesModule { }
