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

  constructor(
    private apiService: ApiHostService,
    private system: SystemUtils,

  ) {  }

  ngOnInit(): void {

    this.userData = this.system.retrieveItem('userData');
    this.classDetails = this.system.retrieveItem('classDetails');

    this.getStudents(this.userData);
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
      })
  }



  getInvitedStudents() {
    const { token } = this.userData;
    const { rid } = this.classDetails;
    this.apiService.getInvitedStudents(rid, token)
      .subscribe((response: any) => {
        const { status } = response; {
          if (status === 200) {
            const { body } = response;
            this.invited = body;
          }
        }
        console.log(response);
      }, (error: any) => {
        console.log(error);
      });
  }
}
