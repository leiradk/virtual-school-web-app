import { Component, OnInit } from '@angular/core';
import { SystemUtils } from "../../../../../../services/system.utils";
import { ApiHostService } from '../../../../../../services/api-host.service';
@Component({
  selector: 'app-check-student-classwork',
  templateUrl: './check-student-classwork.component.html',
  styleUrls: ['./check-student-classwork.component.scss']
})
export class CheckStudentClassworkComponent implements OnInit {
  classworks: any;
  getWork: any;
  workExist: any;
  userdata: any;
  studentdata: any;
  roomdata: any;
  constructor(
    private system: SystemUtils,
    private apiHost: ApiHostService
  ) { }

  ngOnInit(): void {
    this.userdata = this.system.retrieveItem('userData')
    this.studentdata = this.system.retrieveItem('studentData')
    this.roomdata = this.system.retrieveItem('classData')
    this.getClasswork();

  }


  getClasswork() {
    this.apiHost.getStudentClasswork(this.userdata.token, this.studentdata.userID, this.roomdata.classID)
      .subscribe((response: any) => {
        this.classworks = response.body.classworks;
        console.log(this.classworks)
        this.getWork = this.classworks[0]
        this.workExist = true;
      }, (error: any) => {
        this.workExist = false;
        console.log(error)
      })
  }
}
