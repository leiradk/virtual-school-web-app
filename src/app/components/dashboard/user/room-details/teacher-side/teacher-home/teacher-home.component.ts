import { Component, OnInit } from '@angular/core';
import { SystemUtils } from '../../../../../../services/system.utils';
import { ApiHostService } from '../../../../../../services/api-host.service';
import { TeacherSideComponent } from '../teacher-side.component';
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
  topic: any;
  badge: any;
  constructor(
    private apiHost: ApiHostService,
    private system: SystemUtils,
    private teacher: TeacherSideComponent
  ) { }

  ngOnInit(): void {
    this.classDetails = this.system.retrieveItem('classDetails');
    this.userData = this.system.retrieveItem('userData');
  }

  getDate(created) {
    const dateTime = created;
    const dateTimeSplit = dateTime.split(' ');
    const date = dateTimeSplit[0].split('-');
    const month = this.getMonth(parseInt(date[1]));
    return month + ' ' + date[2] + ', ' + date[0];
  }
  invites() {
    this.teacher.invites();
  }

  createRoom() {
    const { rid, className } = this.classDetails;
    const { data } = this.userData;
    const payload = {
      token: this.userData.token,
      classID: rid,
      roomName: className,
      participantName: data.username,
      subject: this.topic
    };
    console.log(payload)
    window.open(`https://3255d0efae4e.ngrok.io`, '_blank');
    // window.open(`http://localhost:8000/cr?token=${this.userData.token}&cid=${rid}&user=${data.username}&subject=${this.topic}&classroom=${className}&conferenceID=1`, '_blank')
    // this.apiHost.createConference(payload)
    //   .subscribe((response: any) => {
    //     console.log(response)
    //     const { body } = response;
    //     const conferenceID = body.conferenceID
    //     // window.open(`http://localhost:8000/cr?token=${this.userData.token}&cid=${rid}&user=${data.username}&subject=${this.topic}&classroom=${className}&conferenceID=${conferenceID}`, '_blank');
    //     // window.open(`https://5e78a9c4cfd8.ngrok.io/cr?token=${this.userData.token}&cid=${rid}&user=${data.username}&subject=${this.topic}&classroom=${className}&conferenceID=${conferenceID}`, '_blank');
  
       
    //   }, (error: any) => {
    //   })

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

  homeActive: any;
  peopleActive: any;
  getUrl: any;
  breadcrumbAdd: any;

  getActiveClass() {
    this.homeActive = 'not-active';
    this.peopleActive = 'active';
    this.breadcrumbAdd = 'People';
  }

  addBadgeName(badge) {
    const { token } = this.userData;
    const payload = {
      token: token,
      badgeName: badge
    }
    this.apiHost.addStudentBadge(payload)
      .subscribe((response: any) => {
        console.log(response)
      }, (error: any) => {
        console.log(error)
      })
  }
}
