import { Component, OnInit } from '@angular/core';
import { SystemUtils } from '../../../../../../services/system.utils';
import { ApiHostService } from '../../../../../../services/api-host.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {
  myFocusVar: any = false;
  comments: any = [];
  classDetails: any;
  userData: any;
  roomUrl: any;
  conferenceStatus: any;
  conID: any
  constructor(
    private apiHost: ApiHostService,
    private system: SystemUtils,
  ) { }

  ngOnInit(): void {
    this.classDetails = this.system.retrieveItem('classDetails');
    this.userData = this.system.retrieveItem('userData');
    this.getConferenceURL();
  }

  getConferenceURL() {
    const { rid } = this.classDetails;
    const { token } = this.userData;
    this.apiHost.getConferenceLink(token, rid)
      .subscribe((response: any) => {
        console.log(response)
        this.roomUrl = response.body.conference[0].roomURL;
        this.conferenceStatus = response.body.conference[0].conferenceStatus;
        this.conID = response.body.conference[0].conferenceID;
      }, (error: any) => {
        console.log(error)
      })
  }
  enterRoom() {
    console.log(this.roomUrl)
    const { rid } = this.classDetails
    const { token } = this.userData
    window.open(`${this.roomUrl}&token=${token}&cid=${rid}&conferenceID=${this.conID}`, '_blank');
  }
}
