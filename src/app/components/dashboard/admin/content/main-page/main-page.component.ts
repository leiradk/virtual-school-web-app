import { Component, OnInit } from "@angular/core";
import { SystemUtils } from "../../../../../services/system.utils";
import { Router } from "@angular/router";
import { ApiHostService } from "../../../../../services/api-host.service";

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

  //teacher variables
  teacherData: any = [];
  teacherSpinner: boolean = true;
  teacherError: boolean = false;
  teacherMessage: any;
  constructor(
    private system: SystemUtils,
    private router: Router,
    private apiService: ApiHostService,
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
        console.log(data.usertype);
        if (parseInt(data.usertype) === 10002) {
          this.router.navigate(["/teacher"]);

        }
      }
    }
    this.studentList();
    this.teacherList();
  }

  studentList() {
    const { token } = this.data;
    this.apiService.getStudents(token)
      .subscribe((response: any) => {
        const { status, body } = response;
        this.studentError = false;
        if (status === 200) {
          this.studentData = body;
          console.log(this.studentData);
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
          console.log(this.teacherData)
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
}
