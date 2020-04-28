import { Component, OnInit } from '@angular/core';
import { SystemUtils } from '../../../../services/system.utils';
import { Router } from "@angular/router";
@Component({
  selector: 'app-teacher-navbar',
  templateUrl: './teacher-navbar.component.html',
  styleUrls: ['./teacher-navbar.component.scss']
})
export class TeacherNavbarComponent implements OnInit {

  constructor(
    private system: SystemUtils,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  Logout() {
    this.system.deleteKey('userData');
    this.system.deleteKey('classDetails');
    this.router.navigate['/landing-page'];
  }
}
