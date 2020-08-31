import { Component, OnInit } from '@angular/core';
import { SystemUtils } from "../../services/system.utils";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: any;
  userType: any;
  workDetails: any;
  classWork: any;
  constructor(
    private system: SystemUtils,
    private router: Router,
  ) { }

  ngOnInit(): void {
   
  }
  logout() {
    this.router.navigate(["/login"]);
    this.system.deleteKey('userData');
    this.system.deleteKey('classDetails');
    this.system.deleteKey('workDetails');

  }
}
