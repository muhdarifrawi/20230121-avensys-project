import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeAllComponent } from './employee-all/employee-all.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';

// material ui
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    EmployeeLoginComponent,
    EmployeeAllComponent,
    EmployeeViewComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    EmployeeDeleteComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule
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
