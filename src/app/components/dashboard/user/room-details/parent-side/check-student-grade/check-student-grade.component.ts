import { Component, OnInit } from '@angular/core';
import { SystemUtils } from "../../../../../../services/system.utils";
import { ApiHostService } from '../../../../../../services/api-host.service';
@Component({
  selector: 'app-check-student-grade',
  templateUrl: './check-student-grade.component.html',
  styleUrls: ['./check-student-grade.component.scss']
})
export class CheckStudentGradeComponent implements OnInit {
  userdata: any;
  studentdata: any;
  roomdata: any;
  grades: any;

  showSpinner:boolean = true;

  constructor(
    private system: SystemUtils,
    private apiHost: ApiHostService
  ) { }

  ngOnInit(): void {
    this.userdata = this.system.retrieveItem('userData')
    this.studentdata = this.system.retrieveItem('studentData')
    this.roomdata = this.system.retrieveItem('classData')

    this.apiHost.getStudentgrade(this.userdata.token, this.studentdata.userID, this.roomdata.classID)
      .subscribe((response: any) => {
        console.log(response)
        this.grades = response.body.grades;
        this.showSpinner = false;
      }, (error: any) => {
        console.log(error);
        this.showSpinner = false;
      })
  }

}
