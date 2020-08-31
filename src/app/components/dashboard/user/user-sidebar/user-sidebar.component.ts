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
  classesRoute: any;
  invitationRoute: any;
  libraryRoute: any;
  isStudentSide: boolean = false;
  isTeacherSide: boolean = false;
  isParentSide: boolean = false;
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
    this.system.storeLocal('classDetails', data);

  }

  routeDashboard() {
    const { usertype } = this.userData.data;
    if (usertype === '10002') {
      this.dashboardRoute = '/user/t/main';
      this.classesRoute = '/user/t/classes';
      this.libraryRoute = '/user/t/library'
      this.isStudentSide = false;
      this.isParentSide = false;
      this.isTeacherSide = true;
    } else if (usertype === '10003') {
      this.dashboardRoute = '/user/s/main';
      this.invitationRoute = '/user/s/invitations';
      this.classesRoute = '/user/s/classes';
      this.libraryRoute = '/user/s/library'
      this.isStudentSide = true;
      this.isTeacherSide = false;
      this.isParentSide = false;
    } else if (usertype === '10004') {
      this.dashboardRoute = '/user/p/main'
      this.isParentSide = true;
      this.isStudentSide = false;
      this.isTeacherSide = false;     
    }
  }



  public toggleDashboard: boolean = false;
  public toggleClass: boolean = false;
  public toggleInvitation: boolean = false;
  public toggleLibrary: boolean = false;
  public toggleMyTeachers: boolean = false;
  public toggleMyBadges: boolean = false;
  public toggleTeachingMaterials: boolean = false;
  public toggleLessonPlan: boolean = false;
  public toggleRecord: boolean = false;

  toggleSidebar(sidebar) {
    if (sidebar === 'dashboard') {
      this.toggleDashboard = true;
      this.toggleClass = false;
      this.toggleInvitation = false;
      this.toggleLibrary = false;
      this.toggleMyTeachers = false;
      this.toggleMyBadges = false;
      this.toggleTeachingMaterials = false;
      this.toggleLessonPlan = false;
      this.toggleRecord = false;

    }
    if (sidebar === 'classes') {
      this.toggleDashboard = false;
      this.toggleClass = true;
      this.toggleInvitation = false;
      this.toggleLibrary = false;
      this.toggleMyTeachers = false;
      this.toggleMyBadges = false;
      this.toggleTeachingMaterials = false;
      this.toggleLessonPlan = false;
      this.toggleRecord = false;
    }
    if (sidebar === 'invitation') {
      this.toggleDashboard = false;
      this.toggleClass = false;
      this.toggleInvitation = true;
      this.toggleLibrary = false;
      this.toggleMyTeachers = false;
      this.toggleMyBadges = false;
      this.toggleTeachingMaterials = false;
      this.toggleLessonPlan = false;
      this.toggleRecord = false;
    }
    if (sidebar === 'library') {
      this.toggleDashboard = false;
      this.toggleClass = false;
      this.toggleInvitation = false;
      this.toggleLibrary = true;
      this.toggleMyTeachers = false;
      this.toggleMyBadges = false;
      this.toggleTeachingMaterials = false;
      this.toggleLessonPlan = false;
      this.toggleRecord = false;
    }
    if (sidebar === 'myteachers') {
      this.toggleDashboard = false;
      this.toggleClass = false;
      this.toggleInvitation = false;
      this.toggleLibrary = false;
      this.toggleMyTeachers = true;
      this.toggleMyBadges = false;
      this.toggleTeachingMaterials = false;
      this.toggleLessonPlan = false;
      this.toggleRecord = false;
    }
    if (sidebar === 'mybadges') {
      this.toggleDashboard = false;
      this.toggleClass = false;
      this.toggleInvitation = false;
      this.toggleLibrary = false;
      this.toggleMyTeachers = false;
      this.toggleMyBadges = true;
      this.toggleTeachingMaterials = false;
      this.toggleLessonPlan = false;
      this.toggleRecord = false;
    }
    if (sidebar === 'record') {
      this.toggleDashboard = false;
      this.toggleClass = false;
      this.toggleInvitation = false;
      this.toggleLibrary = false;
      this.toggleMyTeachers = false;
      this.toggleMyBadges = false;
      this.toggleTeachingMaterials = false;
      this.toggleLessonPlan = false;
      this.toggleRecord = true;
    }
    if (sidebar === 'teachingMaterials') {
      this.toggleDashboard = false;
      this.toggleClass = false;
      this.toggleInvitation = false;
      this.toggleLibrary = false;
      this.toggleMyTeachers = false;
      this.toggleMyBadges = false;
      this.toggleTeachingMaterials = true;
      this.toggleLessonPlan = false;
      this.toggleRecord = false;
    }
    if (sidebar === 'lessonPlan') {
      this.toggleDashboard = false;
      this.toggleClass = false;
      this.toggleInvitation = false;
      this.toggleLibrary = false;
      this.toggleMyTeachers = false;
      this.toggleMyBadges = false;
      this.toggleTeachingMaterials = false;
      this.toggleLessonPlan = true;
      this.toggleRecord = false;
    }


  }
}
