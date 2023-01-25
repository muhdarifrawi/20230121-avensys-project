import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/Services/EmployeeServices/employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuardGuard implements CanActivate {
  constructor(
    private empService:EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.empService.loggedIn){
      return true;
    }
    else{
      window.alert("You need be logged in to access.")
      this.router.navigate(['employees'], { relativeTo: this.route });
      return false;
    }
      
  }
  
}
