import { Component, OnInit } from '@angular/core';
import { ApiHostService } from '../../../../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../../../../services/system.utils';
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-teacher-staff-tab',
  templateUrl: './teacher-staff-tab.component.html',
  styleUrls: ['./teacher-staff-tab.component.scss']
})
export class TeacherStaffTabComponent implements OnInit {

  userData: any;
  classDetails: any;
  showSpinner: boolean = true;
  error: boolean = false;
  invitedParent: any;
  errorMessage: any;
  constructor(
    private apiService: ApiHostService,
    private system: SystemUtils,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.userData = this.system.retrieveItem('userData');
    this.classDetails = this.system.retrieveItem('classDetails');
    this.getInvitedStudents();
  }
  showSuccess() {
    this.toastr.success('Invite has been successfully sent', 'Congratulations', { timeOut: 4000 })
  }
  showFailed() {
    this.toastr.warning('Invite have failed to sent', 'Try Again', { timeOut: 4000 })
  }

  getInvitedStudents() {
    const { token } = this.userData;
    const { rid } = this.classDetails;
    this.apiService.getInvitedStudents(rid, token)
      .subscribe((response: any) => {
        const { status } = response;
        this.showSpinner = false;
        if (status === 200) {
          const { body } = response;
          this.invitedParent = body;
          console.log(this.invitedParent);
        }

      }, (error: any) => {
        console.log(error);
        const { status, message } = error.error;
        this.error = true;
        this.showSpinner = false;
        if (status === 404) {
          this.errorMessage = message;
        } else if (status === 500) {
          this.errorMessage = "Something went wrong, please try again"
        }
      });
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
