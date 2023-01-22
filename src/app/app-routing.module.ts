import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDeleteComponent } from './employees/employee-delete/employee-delete.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './employees/employee-add/employee-add.component';
import { EmployeeAllComponent } from './employees/employee-all/employee-all.component';
import { EmployeeLoginComponent } from './employees/employee-login/employee-login.component';
import { EmployeeViewComponent } from './employees/employee-view/employee-view.component';


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
  { path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
