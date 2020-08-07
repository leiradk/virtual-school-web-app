import { Component, OnInit } from '@angular/core';
import { ApiHostService } from '../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../services/system.utils';
import { Router } from "@angular/router";
@Component({
  selector: 'app-parent-main',
  templateUrl: './parent-main.component.html',
  styleUrls: ['./parent-main.component.scss']
})
export class ParentMainComponent implements OnInit {


  classWork: any;

  showSpinner: boolean = true;
  showSpinnerClass: boolean = true;
  notFound: boolean = false;

  userData: any;
  emptyErrorMessage: any;
  errorMessage: any;
  errorStatus: any;
  myStudent: any;
  classExist: any;
  classStatus: any;
  classList: any;
  activeClass: any;
  constructor(
    private apiHost: ApiHostService,
    private system: SystemUtils,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showSpinner = true;
    this.userData = this.system.retrieveItem('userData');
    this.getStudentInfo();
  }


  classWorkStyle(value: any) {
    if (value % 2 == 0) {
      return 'reminder-butt2'
    } else {
      return 'reminder-butt1'
    }
  }

  getStudentInfo() {
    const { token } = this.userData;
    console.log(token)
    this.apiHost.getMyStudents(token)
      .subscribe((response: any) => {
        this.errorStatus = false;
        this.showSpinner = false;
        console.log(response)
        const { body } = response
        this.myStudent = body;
        this.system.storeLocal('studentData', body[0]);
        this.getStudentClass(token, body[0].email)
        console.log(this.myStudent)
      }, (error: any) => {
        console.log(error)
        const { status, message } = error.error;
        this.errorStatus = true;
        this.showSpinner = false;
        if (status === 404) {
          this.emptyErrorMessage = message
        } else {
          this.errorMessage = 'Something went wrong'
        }
      })
  }

  getStudentClass(token, user) {

    this.showSpinnerClass = true;
    this.apiHost.getMyStudentsClass(token, user)
      .subscribe((response: any) => {
        this.classExist = true;
        const { body } = response;
        this.classList = body;
        this.activeClass = this.classList[0];
        this.notFound = false;
        this.showSpinnerClass = false;
        console.log(response);
      }, (error: any) => {
        console.log(error)
        const { status } = error;
        this.classExist = false;
        this.notFound = true;
        this.showSpinnerClass = false;
      });

  }

  checkRoom(data) {
    const { token } = this.userData;

    console.log(data)
    this.getStudentClass(token, data.email)
    this.system.storeLocal('studentData', data);
  }

  getClassroom(data) {
    console.log(data)
    this.system.storeLocal('classData', data);


    this.router.navigate(['/user/p/classroom']);

  }

}
