import { Component, OnInit } from '@angular/core';
import { ApiHostService } from '../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../services/system.utils';
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

  getDate(){
    const myDate = new Date();
    console.log(myDate);
  }
  getInvitations() {
    const { token } = this.userData;
    this.apiService.getClassInvitation(token)
      .subscribe((response: any) => {
        console.log(response);
        const { status, body } = response;
        if(status === 200 ) {
          this.invitationsDetails = body;
          this.showSpinner = false;
        }
      });
  }
}
