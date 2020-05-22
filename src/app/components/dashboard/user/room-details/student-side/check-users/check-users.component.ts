import { Component, OnInit } from '@angular/core';
import { ApiHostService } from '../../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../../services/system.utils';

@Component({
  selector: 'app-check-users',
  templateUrl: './check-users.component.html',
  styleUrls: ['./check-users.component.scss']
})
export class CheckUsersComponent implements OnInit {


  student: any;
  invited: any;
  userData: any
  classDetails: any;
  showSpinner: boolean = true;
  error: boolean = false;
  errorMessage: any;
  constructor(
    private apiService: ApiHostService,
    private system: SystemUtils,

  ) { }

  ngOnInit(): void {

    this.userData = this.system.retrieveItem('userData');
    this.classDetails = this.system.retrieveItem('classDetails');

    this.getInvitedStudents();

    console.log(this.userData.data.usertype);
  }
  getStudents(userData) {
    const { token } = userData;
    this.apiService.searchStudents(token)
      .subscribe((response: any) => {
        const { body, status } = response;
        if (status === 200) {
          this.student = body;
          this.showSpinner = false;
        }
      }, (error: any) => {
        console.log
      })
  }



  getInvitedStudents() {
    const { token } = this.userData;
    const { rid } = this.classDetails;
    this.apiService.getClassmates(rid, token)
      .subscribe((response: any) => {
        this.showSpinner = false;
        const { status } = response;
        if (status === 200) {
          const { body } = response;
          this.invited = body;
        }

        console.log(response);
      }, (error: any) => {
        console.log(error);
        const { status, message } = error.error;
        this.showSpinner = false;
        this.error = true;
        if (status === 404) {
          this.errorMessage = "You are the only student invited to this class yet.";
        } else if (status === 500) {
          this.errorMessage = "Something went wrong, please try again";
        }

      });
  }
}
