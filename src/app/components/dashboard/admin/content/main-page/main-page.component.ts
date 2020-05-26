import { Component, OnInit } from "@angular/core";
import { SystemUtils } from "../../../../../services/system.utils";
import { Router } from "@angular/router";
import { ApiHostService } from "../../../../../services/api-host.service";
import { AdminListDataService } from "../../../../../services/admin-list-data.service";
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss", '../../../../../../assets/admin/css/styles.min.css'],
})
export class MainPageComponent implements OnInit {
  data: any = [];

  //student variables
  studentData: any = [];
  studentSpinner: boolean = true;
  studentError: boolean = false;
  studentMessage: any;
  studentParams: Observable<string>;


  //teacher variables
  teacherData: any = [];
  teacherSpinner: boolean = true;
  teacherError: boolean = false;
  teacherMessage: any;
  teacherParams: Observable<string>;

  //teacher variables
  parentData: any = [];
  parentSpinner: boolean = true;
  parentError: boolean = false;
  parentMessage: any;
  parentParams: Observable<string>;
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
        this.studentError = false;
        if (status === 200) {
          this.studentData = body;
          this.adminList.setStudent(this.studentData);
          this.studentSpinner = false;
        }
      }, (error: any) => {
        const { status, message } = error.error;
        // setTimeout(() => { this.showFailed(message); }, 1000); //add toast message
        console.log(error);
        this.studentSpinner = false;
        this.studentError = true;
        if (status === 500) {
          this.studentMessage = "Ops. Something went wrong, Please try again"
        } else if (status === 401) {
          this.studentMessage = "Unauthorized Access of Data"
        } else if (status === 404) {
          this.studentMessage = "Opps! Looks like this list is empty."
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
        if (status === 200) {
          this.teacherData = body;
          this.adminList.setTeacher(this.teacherData);
        }
      }, (error: any) => {
        const { status, message } = error.error;
        this.teacherSpinner = false;
        this.teacherError = true;
        if (status === 500) {
          this.teacherMessage = "Ops. Something went wrong, Please try again"
        } else if (status === 401) {
          this.teacherMessage = "Unauthorized Access of Data"
        } else if (status === 404) {
          this.teacherMessage = "Opps! Looks like this list is empty."
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
  parentsList() {
    //get data list for Parents
    const { token } = this.data;
    this.apiService.getParents(token)
      .subscribe((response: any) => {
        this.parentError = false;
        this.parentSpinner = false;
        const { status, body } = response;
        if (status === 200) {
          this.parentData = body;
        }
      }, (error: any) => {
        console.log(error);
        const { status, message } = error.error;
        this.parentSpinner = false;
        this.parentError = true;
        if (status === 500) {
          this.parentMessage = "Ops. Something went wrong, Please try again"
        } else if (status === 401) {
          this.parentMessage = "Unauthorized Access of Data"
        } else if (status === 404) {
          this.parentMessage = "Opps! Looks like this list is empty."
        }

      })
  }
}
