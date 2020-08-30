import { Component, OnInit } from '@angular/core';
import { ApiHostService } from '../../../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../../../services/system.utils';
@Component({
  selector: 'app-teacher-dashboard-main',
  templateUrl: './teacher-dashboard-main.component.html',
  styleUrls: ['./teacher-dashboard-main.component.scss']
})
export class TeacherDashboardMainComponent implements OnInit {

  totalStudentCount: any = 0;
  totalClassesCount: any = 0;
  totalParentCount: any = 0;
  constructor(
    private apiHost: ApiHostService,
    private system: SystemUtils,
  ) { }

  ngOnInit(): void {
    const { token } = this.system.retrieveItem('userData');
    this.getTotalStudents(token);
    this.getTotalClasses(token);
    this.getTotalParents(token);
  }

  getTotalStudents(token) {
    this.apiHost.teacherGetTotalStudents(token)
      .subscribe((response: any) => {
        const { students } = response.body[0]; 
        this.totalStudentCount = students
      }, (error: any) => {
        if(error.status === 404) {
          if(error.statusText === "Not Found") {
            this.totalStudentCount = 0;
          }
        }
      })
  }
  getTotalClasses(token) {
    this.apiHost.teacherGetTotalClasses(token)
    .subscribe((response: any) => {
      const { classes } = response.body[0]; 
      this.totalClassesCount = classes
    }, (error: any) => {
      if(error.status === 404) {
        if(error.statusText === "Not Found") {
          this.totalClassesCount = 0;
        }
      }
    })
  }
  getTotalParents(token) {
    this.apiHost.teacherGetTotalParents(token)
    .subscribe((response: any) => {
      const { students } = response.body[0]; 
      this.totalParentCount = students
    }, (error: any) => {
      if(error.status === 404) {
        if(error.statusText === "Not Found") {
          this.totalParentCount = 0;
        }
      }
    })
  }
}
