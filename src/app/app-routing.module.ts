import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDeleteComponent } from './employees/employee-delete/employee-delete.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './employees/employee-add/employee-add.component';
import { EmployeeAllComponent } from './employees/employee-all/employee-all.component';
import { EmployeeLoginComponent } from './employees/employee-login/employee-login.component';
import { EmployeeViewComponent } from './employees/employee-view/employee-view.component';
import { EmployeeGuardGuard } from './Guards/employee-guard/employee-guard.guard';
import { AdminGuardGuard } from './Guards/admin-guard/admin-guard.guard';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminAuditComponent } from './admin/admin-audit/admin-audit.component';


const routes: Routes = [
  {
    path:"employees",
    children:[
      {
        path:"",
        component:EmployeeLoginComponent
      },
      {
        // view only ONE employee
        path:"view/:id",
        canActivate:[EmployeeGuardGuard],
        component:EmployeeViewComponent
      },
      {
        path:"edit/:id",
        canActivate:[EmployeeGuardGuard],
        component:EmployeeEditComponent
      }
    ]
  },
  {
    path:"admin",
    children:[
      {
        path:"",
        component:AdminLoginComponent
      },
      {
        // lists all employees. should be for admin only.
        path:"all",
        canActivate:[AdminGuardGuard],
        component:EmployeeAllComponent
      },
      {
        // view only ONE employee
        path:"view/:id",
        canActivate:[AdminGuardGuard],
        component:EmployeeViewComponent
      },
      {
        // should only be for admin.
        path:"add",
        canActivate:[AdminGuardGuard],
        component:EmployeeAddComponent
      },
      {
        // should only be for admin.
        path:"delete/:id",
        canActivate:[AdminGuardGuard],
        component:EmployeeDeleteComponent
      },
      {
        path:"edit/:id",
        canActivate:[AdminGuardGuard],
        component:EmployeeEditComponent
      },
      {
        path:"audit-trail",
        canActivate:[AdminGuardGuard],
        component:AdminAuditComponent
      }
    ],
  },
  { path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
