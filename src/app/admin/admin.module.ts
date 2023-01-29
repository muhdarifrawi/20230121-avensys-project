import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

// material ui
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import { AdminAuditComponent } from './admin-audit/admin-audit.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminAuditComponent
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
    MatIconModule,
    RouterModule,
    MatTableModule
  ],
  exports: [
    AdminLoginComponent
  ]
})
export class AdminModule { }
