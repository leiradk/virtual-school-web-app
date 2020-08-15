import { Component, OnInit } from '@angular/core';
import { SystemUtils } from "../../../services/system.utils";
import { Router } from "@angular/router";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private system: SystemUtils,
    private router: Router,
  ) { }

  ngOnInit(): void {
  this.logout() 
}
  logout() {
    console.log('logout')
    this.router.navigate(["/login"]);
    this.system.deleteKey('userData');
    this.system.deleteKey('classDetails');
    this.system.deleteKey('workDetails');

  }
}
