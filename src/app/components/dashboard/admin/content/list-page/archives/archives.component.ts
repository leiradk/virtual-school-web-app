import { Component, OnInit } from "@angular/core";
import { SystemUtils } from "../../../../../../services/system.utils";
import { Router } from "@angular/router";
import { ApiHostService } from "../../../../../../services/api-host.service";
import { AdminListDataService } from "../../../../../../services/admin-list-data.service";
import { Observable, throwError } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss', '../../../../../../../assets/admin/css/styles.min.css']
})
export class ArchivesComponent implements OnInit {
  data: any = [];

  //student variables
  studentData: any = [];
  studentSpinner: boolean = true;
  studentError: boolean = false;
  studentMessage: any;
  studentParams: Observable<string>;
  refreshStudent: boolean = false;

  //teacher variables
  teacherData: any = [];
  teacherSpinner: boolean = true;
  teacherError: boolean = false;
  teacherMessage: any;
  teacherParams: Observable<string>;
  refreshTeacher: boolean = false;

  //parent variables
  parentData: any = [];
  parentSpinner: boolean = true;
  parentError: boolean = false;
  parentMessage: any;
  parentParams: Observable<string>;
  refreshParent: boolean = false;
  constructor(
    private system: SystemUtils,
    private router: Router,
    private apiService: ApiHostService,
    private adminList: AdminListDataService,
  ) { }

  ngOnInit(): void {
    this.data = this.system.retrieveItem("userData");
    if (this.data === undefined || this.data === null) {
      this.router.navigate(["/Landing-Page"]);
    } else {
      const { token } = this.data;

      if (token === undefined) {
        this.router.navigate(["/Landing-Page"]);
      } else {
        const { data } = this.data;
        if (parseInt(data.usertype) === 10002) {
          this.router.navigate(["/teacher"]);

        }
      }
    }
    this.studentParams = this.adminList.student;
    this.teacherParams = this.adminList.teacher;
    this.parentParams = this.adminList.parent;
    this.checkTeacherList();
    this.parentsList();
    this.checkStudentList();
  }

  checkStudentList() {
    this.studentParams.pipe(take(1)).subscribe({
      next: (post) => {
        console.log(post);
        if (post === null || post === undefined) {
          this.studentList();
        } else {
          this.studentSpinner = false;
          this.studentError = false;
          this.studentData = post;
        }
      },
      error: err => {
        console.log(err)

      },
      complete: () => {

      },
    });
  }
  studentList() {
    const { token } = this.data;
    this.apiService.getStudents(token)
      .subscribe((response: any) => {
        const { status, body } = response;
        const value = [];
        if (status === 200) {
          for (let i = 0; i <= (body.length - 1); i++) {
            if (body[i].status === 'inactive') {
              value.push(body[i]);
            }
          }
          if (value.length === 0) {
            this.studentError = true;
            this.adminList.setStudent(null);
            this.studentMessage = "Opps! Looks like this list is empty."
          } else {
            this.studentError = false;
            this.studentData = value;
            this.adminList.setStudent(this.parentData);
          }

          this.studentSpinner = false;
        }
      }, (error: any) => {
        const { status, message } = error.error;
        // setTimeout(() => { this.showFailed(message); }, 1000); //add toast message
        console.log(error);
        this.studentSpinner = false;
        this.studentError = true;
        if (status === 500) {
          this.studentMessage = "Ops. Something went wrong, Click here to try again"
        } else if (status === 401) {
          this.studentMessage = "Unauthorized Access of Data"
        } else if (status === 404) {
          this.studentMessage = "Opps! Looks like this list is empty."
        } else {
          this.studentMessage = "Ops. Something went wrong, Click here to try again"
        }
      });
  }
  checkTeacherList() {
    this.teacherParams.pipe(take(1)).subscribe({
      next: (post) => {
        console.log(post);
        if (post === null || post === undefined) {
          this.teacherList();
        } else {
          this.teacherSpinner = false;
          this.teacherError = false;
          this.teacherData = post;
        }
      },
      error: err => {
        console.log(err)

      },
      complete: () => {

      },
    });
  }
  teacherList() {
    //get data list for teacher and staff
    const { token } = this.data;
    this.apiService.getTeacher(token)
      .subscribe((response: any) => {
        this.teacherError = false;
        this.teacherSpinner = false;
        const { status, body } = response;
        const value = [];
        if (status === 200) {
          for (let i = 0; i <= (body.length - 1); i++) {
            if (body[i].status === 'inactive') {
              value.push(body[i]);
            }
          }
          if (value.length === 0) {
            this.teacherError = true;
            this.adminList.setTeacher(null);
            this.teacherMessage = "Opps! Looks like this list is empty."
          } else {
            this.teacherError = false;
            this.teacherData = value;
            this.adminList.setTeacher(this.parentData);
          }
        }
      }, (error: any) => {
        const { status, message } = error.error;
        this.teacherSpinner = false;
        this.teacherError = true;
        if (status === 500) {
          this.teacherMessage = "Ops. Something went wrong, Click here to try again"
        } else if (status === 401) {
          this.teacherMessage = "Unauthorized Access of Data"
        } else if (status === 404) {
          this.teacherMessage = "Opps! Looks like this list is empty."
        } else {
          this.teacherMessage = "Ops. Something went wrong, Click here to try again"
        }

      })
  }

  checkParentList() {
    this.parentParams.pipe(take(1)).subscribe({
      next: (post) => {
        console.log(post);
        if (post === null || post === undefined) {
          this.parentsList();
        } else {
          this.parentSpinner = false;
          this.parentError = false;
          this.parentData = post;
        }
      },
      error: err => {
        console.log(err)

      },
      complete: () => {
        console.log('completed')

      },
    });
  }

  refreshParentList() {
    console.log('refresh');
    this.parentError = false;
    this.parentSpinner = true;
    this.parentsList();
  }
  parentsList() {
    //get data list for Parents
    const { token } = this.data;
    this.apiService.getParents(token)
      .subscribe((response: any) => {
        this.parentError = false;
        this.parentSpinner = false;
        const { status, body } = response;
        const value = [];
        if (status === 200) {
          for (let i = 0; i <= (body.length - 1); i++) {
            if (body[i].status === 'inactive') {
              value.push(body[i]);
            }
          }
          if (value.length === 0) {
            this.teacherError = true;
            this.adminList.setTeacher(null);
            this.teacherMessage = "Opps! Looks like this list is empty."
          } else {
            this.teacherError = false;
            this.teacherData = value;
            this.adminList.setTeacher(this.parentData);
          }
          this.parentData = body;
        }
      }, (error: any) => {
        console.log(error);
        const { status, message } = error.error;
        this.parentSpinner = false;
        this.parentError = true;
        if (status === 500) {
          this.refreshParent = true;
          this.parentMessage = "Ops. Something went wrong, Click here to try again"
        } else if (status === 401) {
          this.parentMessage = "Unauthorized Access of Data"
        } else if (status === 404) {
          this.parentMessage = "Opps! Looks like this list is empty."
        } else {
          this.refreshParent = true;
          this.parentMessage = "Ops. Something went wrong, Click here to try again"
        }

      })
  }

}
