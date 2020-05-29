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
  getUsername: any;
  getType: any;

  //student variables
  studentData: any = [];
  studentSpinner: boolean = true;
  studentError: boolean = false;
  studentMessage: any;
  studentParams: Observable<string>;
  refreshStudent: boolean = false;
  studentSearchText: any;
  public studentShowSearch: boolean = false;

  //teacher variables
  teacherData: any = [];
  teacherSpinner: boolean = true;
  teacherError: boolean = false;
  teacherMessage: any;
  teacherParams: Observable<string>;
  refreshTeacher: boolean = false;
  teacherSearchText: any;
  public teacherShowSearch: boolean = false;

  //parent variables
  parentData: any = [];
  parentSpinner: boolean = true;
  parentError: boolean = false;
  parentMessage: any;
  parentParams: Observable<string>;
  refreshParent: boolean = false;
  parentSearchText: any;
  public parentShowSearch: boolean = false;

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
    this.studentParams = this.adminList.inactiveStudent;
    this.teacherParams = this.adminList.inactiveTeacher;
    this.parentParams = this.adminList.inactiveParent;
    this.checkTeacherList();
    this.checkParentList();
    this.checkStudentList();
  }

  checkStudentList() {
    this.studentParams.pipe(take(1)).subscribe({
      next: (post) => {
        console.log('post', post);
        console.log(post);
        if (post === null || post === undefined || post.length === 0) {
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
  refreshStudentList() {
    console.log('refresh');
    this.studentError = false;
    this.studentSpinner = true;
    this.studentList();
  }
  studentList() {
    const { token } = this.data;
    this.apiService.getStudents(token)
      .subscribe((response: any) => {
        const { status, body } = response;
        const value = [];
        const active = [];
        if (status === 200) {
          for (let i = 0; i <= (body.length - 1); i++) {
            if (body[i].status === 'inactive') {
              value.push(body[i]);
            } else {
              active.push(body[i]);
            }
          }
          this.adminList.setStudent(active);
          if (value.length === 0) {
            this.studentError = true;
            this.adminList.setInactiveStudent(null);
            this.studentMessage = "Opps! Looks like this list is empty."
          } else {
            this.studentError = false;
            this.studentData = value;
            this.adminList.setInactiveStudent(this.studentData);
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
          this.refreshStudent = true;
          this.studentMessage = "Ops. Something went wrong, Click here to try again"
        } else if (status === 401) {
          this.studentMessage = "Unauthorized Access of Data"
        } else if (status === 404) {
          this.studentMessage = "Opps! Looks like this list is empty."
        } else {
          this.refreshStudent = true;
          this.studentMessage = "Ops. Something went wrong, Click here to try again"
        }
      });
  }
  checkTeacherList() {
    this.teacherParams.pipe(take(1)).subscribe({
      next: (post) => {
        console.log(post);
        if (post === null || post === undefined || post.length === 0) {
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
  refreshTeacherList() {
    console.log('refresh');
    this.teacherError = false;
    this.teacherSpinner = true;
    this.teacherList();
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
            this.adminList.setInactiveTeacher(null);
            this.teacherMessage = "Opps! Looks like this list is empty."
          } else {
            this.teacherError = false;
            this.teacherData = value;
            this.adminList.setInactiveTeacher(this.teacherData);
          }
        }
      }, (error: any) => {
        const { status, message } = error.error;
        this.teacherSpinner = false;
        this.teacherError = true;
        if (status === 500) {
          this.refreshTeacher = true;
          this.teacherMessage = "Ops. Something went wrong, Click here to try again"
        } else if (status === 401) {
          this.teacherMessage = "Unauthorized Access of Data"
        } else if (status === 404) {
          this.teacherMessage = "Opps! Looks like this list is empty."
        } else {
          this.refreshTeacher = true;
          this.teacherMessage = "Ops. Something went wrong, Click here to try again"
        }

      })
  }

  checkParentList() {
    this.parentParams.pipe(take(1)).subscribe({
      next: (post) => {
        console.log(post);
        if (post === null || post === undefined || post.length === 0) {
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
        const active = [];
        if (status === 200) {
          for (let i = 0; i <= (body.length - 1); i++) {
            if (body[i].status === 'inactive') {
              value.push(body[i]);
            }
          }
          if (value.length === 0) {
            this.parentError = true;
            this.adminList.setInactiveParents(null);
            this.parentMessage = "Opps! Looks like this list is empty."
          } else {
            this.parentError = false;
            this.parentData = value;
            this.adminList.setInactiveParents(this.parentData);
          }
          // this.parentData = body;
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



  toggle(search) {
    if (search === 'teacher') {
      if (this.teacherShowSearch === true) {
        setTimeout(() => {
          this.teacherShowSearch = !this.teacherShowSearch;
        }, 300);
      } else {
        this.teacherShowSearch = !this.teacherShowSearch;
      }
    } else if (search === "student") {
      if (this.studentShowSearch === true) {
        setTimeout(() => {
          this.studentShowSearch = !this.studentShowSearch;
        }, 300);
      } else {
        this.studentShowSearch = !this.studentShowSearch;
      }
    } else if (search === 'parent') {
      if (this.parentShowSearch === true) {
        setTimeout(() => {
          this.parentShowSearch = !this.parentShowSearch;
        }, 300);
      } else {
        this.parentShowSearch = !this.parentShowSearch;
      }
    }
  }

  getUsernameData(user, type) {
    this.getUsername = user;
    this.getType = type
  }
  pullFromArchive() {
    const { token } = this.data;
    const payload = {
      token: token,
      username: this.getUsername,
      action: 'active'
    }
    if (this.getType === 'teacher') {
      this.teacherSpinner = true;
    } else if (this.getType === 'parent') {
      this.parentSpinner = true;
    } else if (this.getType === 'student') {
      this.studentSpinner = true;
    }
    this.apiService.pullFromArchive(payload)
      .subscribe((response: any) => {
        if (this.getType === 'teacher') {
          this.teacherList();
          this.adminList.setTeacher(null);
          this.adminList.setInactiveTeacher(null);
          this.adminList.setAllTeachers(null);
        } else if (this.getType === 'parent') {
          this.parentsList();
          this.adminList.setInactiveParents(null);
          this.adminList.setParents(null);
        } else if (this.getType === 'student') {
          this.studentList();
          this.adminList.setStudent(null);
          this.adminList.setInactiveStudent(null);
        }
      }, (error: any) => {
        console.log(error);
      })

  }

}
