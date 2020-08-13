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


  classWorkStyle(value: any) {
    if (value % 2 == 0) {
      return 'reminder-butt2'
    } else {
      return 'reminder-butt1'
    }
  }

  getDate(submitted) {
    const dateTime = submitted;
    const dateTimeSplit = dateTime.split(' ');
    const date = dateTimeSplit[0].split('-');
    const month = this.getMonth(parseInt(date[1]));
    return month + ' ' + date[2] + ', ' + date[0];
  }
  getMonth(month) {
    if (month === 1) {
      return 'January';
    } else if (month === 2) {
      return 'February'
    } else if (month === 3) {
      return 'March'
    } else if (month === 4) {
      return 'April'
    } else if (month === 5) {
      return 'May'
    } else if (month === 6) {
      return 'June'
    } else if (month === 7) {
      return 'July'
    } else if (month === 8) {
      return 'August'
    } else if (month === 9) {
      return 'September'
    } else if (month === 10) {
      return 'October'
    } else if (month === 11) {
      return 'November'
    } else if (month === 12) {
      return 'December'
    }
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
