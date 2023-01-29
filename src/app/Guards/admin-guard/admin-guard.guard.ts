import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/Services/AdminServices/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  constructor(
    private adminService:AdminService,
    private route: ActivatedRoute,
    private router: Router,
    ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.adminService.loggedIn){
        return true;
      }
      else{
        window.alert("You need be logged in to access.")
        this.router.navigate(['admin'], { relativeTo: this.route });
        return false;
      }
  }
  
}
