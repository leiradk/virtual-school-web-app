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
  downloadFile: any;
  loading: any = true;
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
        this.loading = false;
      }, (error: any) => {
        this.loading = false;
        this.workExist = false;
        console.log(error)
      })
  }

  checkWork(data: any) {
    console.log(data)
    this.getWork = data;
  }

  download(attachment, filename) {
    this.downloadFile = "data:application/pdf;base64," + attachment;
    // console.log('data');
    // console.log(this.downloadFile);
    const downloadLink = document.createElement("a");
    const fileName = filename;
    if (filename === 'None' || fileName === null || filename === undefined) {
      // this.toastr.warning('No File Was Uploaded', 'Empty File', { timeOut: 5000 })

    } else {
      downloadLink.href = this.downloadFile;
      downloadLink.download = fileName;
      downloadLink.click();
    }

  }
}
