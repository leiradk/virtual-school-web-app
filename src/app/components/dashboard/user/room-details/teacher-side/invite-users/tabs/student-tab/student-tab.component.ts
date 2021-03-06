import { Component, OnInit } from '@angular/core';
import { ApiHostService } from '../../../../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../../../../services/system.utils';
import { ToastrService } from "ngx-toastr";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
declare var jQuery: any;

@Component({
  selector: 'app-student-tab',
  templateUrl: './student-tab.component.html',
  styleUrls: ['./student-tab.component.scss']
})
export class StudentTabComponent implements OnInit {
  public inviteForm: FormGroup;
  teacherSearchText: any;
  userData: any;
  classDetails: any;
  showSpinner: boolean = true;
  error: boolean = false;
  invitedParent: any;
  errorMessage: any;
  student: any;
  badge: any;
  getStudentID: any;
  inviting: boolean = false;
  noBadgeFound: boolean = false;
  noBadgeMessage: any;
  constructor(
    private apiService: ApiHostService,
    private system: SystemUtils,
    private toastr: ToastrService,
    private fb: FormBuilder,
  ) {
    this.classFormModel()
  }

  ngOnInit(): void {
    this.userData = this.system.retrieveItem('userData');
    this.classDetails = this.system.retrieveItem('classDetails');
    this.getInvitedStudents();
    this.getStudents(this.userData, this.classDetails)
    this.getBadges();
  }
  showSuccess() {
    this.toastr.success('Invite has been successfully sent', 'Congratulations', { timeOut: 4000 })
  }
  showFailed(message) {
    this.toastr.warning(message, 'Try Again', { timeOut: 4000 })
  }

  classFormModel() {
    this.inviteForm = this.fb.group({
      username: [null, Validators.required]
    });
  }
  getStudents(userData, classDetails) {
    const { token } = userData;
    const { classGradeLevel } = classDetails
    this.apiService.searchStudents(token, classGradeLevel)
      .subscribe((response: any) => {
        // this.showSpinner = false;
        const { body, status } = response;
        if (status === 200) {
          this.student = body;
          // this.showSpinner = false;
        }
      }, (error: any) => {
        // this.showSpinner = false;
      })
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
        }

      }, (error: any) => {
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

  inviteStudent(data) {

    const { token } = this.userData;
    const { rid } = this.classDetails;
    const payload = {
      token: token,
      classID: rid,
      user: data.email

    }
    this.inviting = true;
    this.error = false;
    this.showSpinner = true;
    this.apiService.sendClassInvites(payload)
      .subscribe((response: any) => {
        // this.getStudents(this.userData);
        this.showSuccess(); // show toastr
        jQuery('#myModal').modal('hide'); //close modal after submit
        this.inviting = false;
      }, (error: any) => {
        const { message, status } = error.error;
        this.inviting = false;
        this.showSpinner = false;
        console.log(error.error);
        if (status === 403) {
          this.showFailed(message)
        } else {
          this.showFailed('Invite have failed to sent');
        }
        jQuery('#myModal').modal('hide'); //close modal after submit
      })

  }

  getBadges() {
    const { token } = this.userData;

    this.apiService.getBadges(token)
      .subscribe((response: any) => {
        console.log(response)
        this.badge = response.body.badges
      }, (error: any) => {
        console.log('badge: ', error)
        const { status } = error;
        this.noBadgeFound = true;
        if (status === 404) {
          console.log('no badge found')
          this.noBadgeMessage = 'no badge found';
        } else {
          this.noBadgeMessage = 'Something went wrong';
        }
      })
  }
  getAvailableBadges(sid) {
    const { rid } = this.classDetails;
    this.getStudentID = sid;
    const { token } = this.userData;
    this.apiService.getAvailableBadges(token, this.getStudentID, rid)
      .subscribe((response: any) => {
        console.log(response)
      }, (error: any) => {
        console.log(error)
      })
  }

  adddBadgeOnStudent(badgeID) {
    const payload = {
      token: this.userData.token,
      badgeID: badgeID,
      studID: this.getStudentID,
      classID: this.classDetails.rid
    }
    console.log(payload)
    this.apiService.addBadgeForStudent(payload)
      .subscribe((response: any) => {
        console.log(response)
      }, (error: any) => {
        console.log(error)
      })
  }
}
