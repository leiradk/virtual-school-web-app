import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SystemUtils } from '../../../../services/system.utils';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss', '../../../../../assets/admin/css/styles.min.css']
})
export class UserNavbarComponent implements OnInit {
  userData: any;
  username: any;
  usertype: any;
  constructor(
    private router: Router,
    private system: SystemUtils
  ) { }

  ngOnInit(): void {
    this.userData = this.system.retrieveItem('userData');
    const { username, usertype } = this.userData.data;
    this.username = username;
    console.log(usertype)
    
    if (parseInt(usertype) === 10002) {
      this.usertype = 'Teacher';
    } else if(parseInt(usertype) === 10003) {
      this.usertype = 'Student';
    } else {
      console.log('not accepted')
    }

  }
  logout() {
    console.log('logout')
    this.router.navigate(["/login"]);
    this.system.deleteKey('userData');
    this.system.deleteKey('classDetails');
    this.system.deleteKey('workDetails');

  }
}
