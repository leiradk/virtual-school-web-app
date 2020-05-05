import { Component, OnInit } from '@angular/core';
import { SystemUtils } from "../../../../services/system.utils";
import { Router } from "@angular/router";
@Component({
  selector: 'app-student-navbar',
  templateUrl: './student-navbar.component.html',
  styleUrls: ['./student-navbar.component.scss']
})
export class StudentNavbarComponent implements OnInit {

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
