import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiHostService } from '../../../../services/api-host.service';
import { SystemUtils } from '../../../../services/system.utils';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.scss', '../../../../../assets/admin/css/styles.min.css']
})
export class UserSidebarComponent implements OnInit {
  userData: any;
  classDetails: any;
  data: any;
  userType: any;
  dashboardRoute: any;
  invitationRoute:any;
  isStudentSide:boolean = false;
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
      this.isStudentSide = false;
    } else if (usertype === '10003') {
      this.dashboardRoute = '/user/s/main';
      this.invitationRoute = '/user/s/invitations';
      this.isStudentSide = true;
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


  public toggleDashboard: boolean = false;
  public toggleClass: boolean = false;
  public toggleInvitation: boolean = false;

  toggleSidebar(sidebar) {
    if (sidebar === 'dashboard') {
      this.toggleDashboard = true;
      this.toggleClass = false;
      this.toggleInvitation = false;

    }
    if (sidebar === 'classes') {
      this.toggleDashboard = false;
      this.toggleClass = false;
      this.toggleInvitation = false;
    }
    if (sidebar === 'invitation') {
      this.toggleDashboard = false;
      this.toggleClass = false;
      this.toggleInvitation = true;
    }
  }
}
