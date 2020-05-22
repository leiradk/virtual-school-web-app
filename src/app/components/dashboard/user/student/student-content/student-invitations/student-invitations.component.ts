import { Component, OnInit } from '@angular/core';
import { ApiHostService } from '../../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../../services/system.utils';
import { formatDate } from '@angular/common';
import { ToastrService } from "ngx-toastr";


declare var jQuery: any;

@Component({
  selector: 'app-student-invitations',
  templateUrl: './student-invitations.component.html',
  styleUrls: ['./student-invitations.component.scss']
})
export class StudentInvitationsComponent implements OnInit {

  myCLass: any;
  showBar: boolean = false;
  showSpinner: boolean = true;
  accepting: boolean = false;
  userData: any;
  invitationsDetails: any;

  invitationsExist: boolean = false;
  constructor(
    private apiService: ApiHostService,
    private toastr: ToastrService,
    private system: SystemUtils
  ) { }

  ngOnInit(): void {
    this.showSpinner = true;
    this.userData = this.system.retrieveItem('userData');
    this.getInvitations();
  }

  showSuccess() {
    this.toastr.success('Class is added successfully', 'Congratulations', { timeOut: 4000 })
  }


  acceptInitation(value) {
    this.myCLass = value.rid;
    this.showBar = true;
    const { token } = this.userData;
    const { rid } = value;
    const myDate = new Date();
    const cValue = formatDate(myDate, 'yyyy-MM-dd hh:mm:ss', 'en-US');
    // console.log(value);
    // console.log(rid);
    const payload = {
      token: token,
      classID: rid
    }
    this.apiService.acceptInvitation(payload)
      .subscribe((response: any) => {
        console.log()
        const { status } = response;
        this.accepting = true;
        this.getInvitations;
        // if (status === 200) {
        // }
      }, (error: any) => {
        console.log(error);
        this.accepting = true;
      })
  }

  //get classroom invitations
  getInvitations() {
    const { token } = this.userData;
    this.apiService.getClassInvitation(token)
      .subscribe((response: any) => {
        const { status, body } = response;
        if (status === 200) {
          this.invitationsDetails = body;
          this.showSpinner = false;
          if (this.invitationsDetails) {
            let roomCount = 0;
            this.showSpinner = false;
            for (let i = 0; i <= (this.invitationsDetails.length - 1); i++) {
              if (this.invitationsDetails[i].inviteStatus === 'pending') {
                roomCount++;
                if (roomCount > 0) {
                  this.invitationsExist = true;
                } else {
                  this.invitationsExist = false;
                }

              } else {
                this.invitationsExist = false;
              }
            }
          }
          
        }
      }, (error: any) => {
        this.invitationsExist = false;
        this.showSpinner = false;
      });
  }
}
