import { Component, OnInit } from '@angular/core';
import { ApiHostService } from '../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../services/system.utils';
@Component({
  selector: 'app-parent-main',
  templateUrl: './parent-main.component.html',
  styleUrls: ['./parent-main.component.scss']
})
export class ParentMainComponent implements OnInit {


  showSpinner: boolean = true;

  userData: any;
  emptyErrorMessage: any;
  errorMessage: any;
  errorStatus: any;
  myStudent: any;
  constructor(
    private apiHost: ApiHostService,
    private system: SystemUtils
  ) { }

  ngOnInit(): void {
    this.showSpinner = true;
    this.userData = this.system.retrieveItem('userData');
    this.getStudentInfo();
  }

  getStudentInfo() {
    const { token } = this.userData;
    console.log(token)
    this.apiHost.getMyStudents(token)
      .subscribe((response: any) => {
        this.errorStatus = false;
        this.showSpinner = false;

        const { body } = response
        this.myStudent = body;

        console.log(this.myStudent)
      }, (error: any) => {
        console.log(error)
        const { status, message } = error.error;
        this.errorStatus = true;
        this.showSpinner = false;
        if (status === 404) {
          this.emptyErrorMessage = message
        } else {
          this.errorMessage = 'Something went wrong'
        }
      })
  }


}
