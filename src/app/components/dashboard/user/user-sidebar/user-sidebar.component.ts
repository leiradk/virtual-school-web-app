import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiHostService } from '../../../../services/api-host.service';
import { SystemUtils } from '../../../../services/system.utils';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.scss']
})
export class UserSidebarComponent implements OnInit {
  userData: any;
  classDetails: any;
  data: any;
  userType: any;
  dashboardRoute: any;
  public toggle: boolean = false;
  public togClass: boolean = false;
  constructor(
    private apiService: ApiHostService,
    private system: SystemUtils,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userData = this.system.retrieveItem('userData');
    // this.getClassroom(this.userData);
    const { usertype } = this.userData.data;
    this.userType = usertype;
    // console.log(usertype)
    this.routeDashboard();
  }
  viewDetails(data) {
    console.log(data)
    this.system.storeLocal('classDetails', data);

  }

  routeDashboard() {
    const { usertype } = this.userData.data;
    if (usertype === '10002') {
      this.dashboardRoute = '/user/t/main';
    } else if (usertype === '10003') {
      this.dashboardRoute = '/user/s/main';
    }
  }
  //getting all classroom for one specific teacher
  // getClassroom(data) {
  //   const { token } = data;
  //   this.apiService.getClassroom(token)
  //     .subscribe((response: any) => {
  //       const { status, message, body } = response;
  //       if (status === 200) {
  //         this.classDetails = body;
  //       }
  //     });
  // }

  @Output() messageEvent = new EventEmitter<boolean>();

  clickEvent(event) {
    this.toggle = !this.toggle;
    this.messageEvent.emit(this.toggle)
  }

  toggleClass() {
    this.togClass = !this.togClass;
  }
}
