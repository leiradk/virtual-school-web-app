import { Component, OnInit } from '@angular/core';
import { SystemUtils } from "../../services/system.utils";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private system: SystemUtils,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.system.deleteKey('userData');
    this.system.deleteKey('classDetails');
    this.router.navigate(["/Landing-Page"]);
  }
}
