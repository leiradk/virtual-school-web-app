import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SystemUtils } from '../../../../services/system.utils';
@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss', '../../../../../assets/admin/css/styles.min.css']
})
export class UserNavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private system: SystemUtils
  ) { }

  ngOnInit(): void {
  }
  logout() {
    console.log('logout')
    this.router.navigate(["/login"]);
    this.system.deleteKey('userData');
    this.system.deleteKey('classDetails');
    this.system.deleteKey('workDetails');

  }
}
