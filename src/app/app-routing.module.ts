import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeAllComponent } from './employee/employee-all/employee-all.component';
import { EmployeeDeleteComponent } from './employee/employee-delete/employee-delete.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { EmployeeViewComponent } from './employee/employee-view/employee-view.component';

const routes: Routes = [
  {
    path:"employees",
    children:[
      {
        path:"",
        component:EmployeeLoginComponent
      },
      {
        // lists all employees. should be for admin only.
        path:"all",
        component:EmployeeAllComponent
      },
      {
        // view only ONE employee
        path:"view/:id",
        component:EmployeeViewComponent
      },
      {
        // should only be for admin.
        path:"add/:id",
        component:EmployeeAddComponent
      },
      {
        // should only be for admin.
        path:"delete/:id",
        component:EmployeeDeleteComponent
      },
      {
        path:"edit/:id",
        component:EmployeeEditComponent
      }
    ]
  },
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
