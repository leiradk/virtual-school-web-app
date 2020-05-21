import { Component, OnInit } from '@angular/core';
import { ApiHostService } from '../../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../../services/system.utils';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { SharedPostService } from "../../../../../../services/shared-post.service";
@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.scss']
})
export class StudentMainComponent implements OnInit {

  classDetails: any;
  month: any;
  day: any;
  year: any;
  showSpinner: boolean = true;
  userData: any;
  errorData: boolean = false;

  constructor(
    private apiService: ApiHostService,
    private system: SystemUtils,
    private sharedPost: SharedPostService

  ) { }


  ngOnInit(): void {
    this.userData = this.system.retrieveItem('userData');
    this.system.deleteKey('classDetails');
    // this.getClassroom(this.userData)
    this.getInvitations();
  }

  deleteClassData() {
    this.sharedPost.setRouteToken(null);
    this.sharedPost.setComments(null);
  }
  //get accepted classroom invitations
  getInvitations() {
    const { token } = this.userData;

    this.apiService.getClassInvitation(token)
      .subscribe((response: any) => {
        const { status, body } = response;
        if (status === 200) {
          // this.invitationsDetails = body;
          // this.showSpinner = false;
          this.classDetails = body;
          // const date = body[0].classCreated.split(' ')[0].split('-');
          // console.log(date);
          // console.log(this.getDate(parseInt(date[1])));
          // this.month = this.getDate(parseInt(date[1]));
          // this.day = date[2];
          // this.year = date[0];
          this.showSpinner = false;
        }
      }, (errorResponse: any) => {
        this.showSpinner = false;
        const { status, message } = errorResponse.error;
        if (status === 403) {
          this.errorData = true;
        }

      });
  }

  viewDetails(data) {
    this.system.storeLocal('classDetails', data);
    this.deleteClassData();
  }
  getDate(month) {
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
