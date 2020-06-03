import { Component, OnInit } from '@angular/core';
import { SystemUtils } from '../../../../../../services/system.utils';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.scss']
})
export class TeacherHomeComponent implements OnInit {
  myFocusVar: any = false;
  comments: any = [];
  classDetails: any;
  userData: any;
  constructor(
    private system: SystemUtils,
  ) { }

  ngOnInit(): void {
    this.classDetails = this.system.retrieveItem('classDetails');
    this.userData = this.system.retrieveItem('userData');
    console.log(this.classDetails)
  }

  getDate(created) {
    const dateTime = created;
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

}
