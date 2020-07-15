import { Component, OnInit } from '@angular/core';
import { ApiHostService } from '../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../services/system.utils';
@Component({
  selector: 'app-parent-main',
  templateUrl: './parent-main.component.html',
  styleUrls: ['./parent-main.component.scss']
})
export class ParentMainComponent implements OnInit {

  userData: any;
  emptyErrorMessage: any;
  errorMessage: any;
  errorStatus: any;
  constructor(
    private apiHost: ApiHostService,
    private system: SystemUtils
  ) { }

  ngOnInit(): void {
    this.userData = this.system.retrieveItem('userData');
    this.getStudentInfo();
  }

  getStudentInfo() {
    const { token } = this.userData;
    console.log(token)
    this.apiHost.getMyStudents(token)
      .subscribe((response: any) => {
        console.log(response)
      }, (error: any) => {
        console.log(error)
        const { status, message } = error.error;
        this.errorStatus = true;
        if(status === 404) {
          this.emptyErrorMessage = message
        } else {
          this.errorMessage = 'Something went wrong'
        }
      })
  }
}
