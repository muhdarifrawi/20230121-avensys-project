import { Component, OnInit } from '@angular/core';
import { AuditService } from 'src/app/Services/AuditServices/audit.service';

@Component({
  selector: 'app-admin-audit',
  templateUrl: './admin-audit.component.html',
  styleUrls: ['./admin-audit.component.css']
})
export class AdminAuditComponent implements OnInit{
  allAudit:any
  columnDisplay: string[] = ['id', 'action', 'editor', 'editTime']
  constructor(
    private auditService:AuditService
  ){}

  ngOnInit(): void {
    this.auditService.viewAudits().subscribe((data)=>{
      this.allAudit = data
    })
  }
}
