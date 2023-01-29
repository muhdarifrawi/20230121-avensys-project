import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  constructor(
    private http:HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  // don't forget to change this if hosting it online
  baseUrl:string="http://localhost:8080/"

  addAudit(auditInfo:any){
    return this.http.post(this.baseUrl + "audit-trail/add", auditInfo)
  }

  viewAudits(){
    return this.http.get(this.baseUrl + "audit-trail")
  }
}
