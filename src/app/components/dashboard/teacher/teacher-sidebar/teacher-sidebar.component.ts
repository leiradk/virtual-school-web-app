import { Component, OnInit } from '@angular/core';
import { ApiHostService } from '../../../../services/api-host.service';
import { SystemUtils } from '../../../../services/system.utils';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacher-sidebar',
  templateUrl: './teacher-sidebar.component.html',
  styleUrls: ['./teacher-sidebar.component.scss']
})
export class TeacherSidebarComponent implements OnInit {
  userData: any;
  classDetails: any;
  constructor(
    private apiService: ApiHostService,
    private system: SystemUtils,
    private router: Router,
    // private location: Location
  ) { }

  ngOnInit(): void {
    this.userData = this.system.retrieveItem('userData');
    this.getClassroom(this.userData);
  }

  viewDetails(data) {
    console.log(data)
    this.system.storeLocal('classDetails', data);
   
  }
  getClassroom(data) {
    const { token } = data;
    this.apiService.getClassroom(token)
      .subscribe((response: any) => {
        console.log(response);
        const { status, message, body } = response;
        if (status === 200) {
          this.classDetails = body;
        }
      });
  }

}
