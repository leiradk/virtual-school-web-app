import { Component, OnInit } from '@angular/core';
import { ApiHostService } from '../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../services/system.utils';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-student-invitations',
  templateUrl: './student-invitations.component.html',
  styleUrls: ['./student-invitations.component.scss']
})
export class StudentInvitationsComponent implements OnInit {
  showSpinner: boolean = true;

  userData: any;
  invitationsDetails: any;
  constructor(
    private apiService: ApiHostService,
    private system: SystemUtils
  ) { }

  ngOnInit(): void {
    this.userData = this.system.retrieveItem('userData');
    this.getInvitations();
  }

  //accepting classroom invations 
  acceptInitation(value) {
    const { token } = this.userData;
    const { rid } = value;
    const myDate = new Date();
    const cValue = formatDate(myDate, 'yyyy-MM-dd hh:mm:ss', 'en-US');
    console.log(value)
    const payload = {
      token: token,
      classID: rid
    }
    this.apiService.acceptInvitation(payload)
      .subscribe((response: any) => {
        const { status } = response;
        console.log(response);
        if (status === 200) {
          this.getInvitations;
        }
      }, (error: any) => {
        console.log(error);
      })
  }

  //get classroom invitations
  getInvitations() {
    const { token } = this.userData;
    console.log(token)
    this.apiService.getClassInvitation(token)
      .subscribe((response: any) => {
        console.log(response);
        const { status, body } = response;
        if (status === 200) {
          this.invitationsDetails = body;
          this.showSpinner = false;
        }
      });
  }
}
