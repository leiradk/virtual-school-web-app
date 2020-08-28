import { Component, OnInit } from '@angular/core';
import { ApiHostService } from '../../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../../services/system.utils';
@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.scss']
})
export class StudentMainComponent implements OnInit {

  totalBadgeCount: any = 0;
  totalClassesCount: any = 0;
  totalTeacherCount: any = 0;
  constructor(
    private apiHost: ApiHostService,
    private system: SystemUtils,
  ) { }

  ngOnInit(): void {
    const { token } = this.system.retrieveItem('userData');
    this.getTotalTeacher(token);
    this.getTotalClasses(token);
    this.getTotalBadge(token);
  }

  getTotalTeacher(token) {
    this.apiHost.studentGetTotalTeachers(token)
      .subscribe((response: any) => {
        const { classes } = response.body[0]; 
        this.totalTeacherCount = classes
      }, (error: any) => {
        if(error.status === 404) {
          if(error.statusText === "Not Found") {
            this.totalTeacherCount = 0;
          }
        }
      })
  }
  getTotalClasses(token) {
    this.apiHost.studentGetTotatClasses(token)
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
  getTotalBadge(token) {
    this.apiHost.studentGetTotalBadge(token)
    .subscribe((response: any) => {
      const { badges } = response.body[0]; 
      this.totalBadgeCount = badges
    }, (error: any) => {
      if(error.status === 404) {
        if(error.statusText === "Not Found") {
          this.totalBadgeCount = 0;
        }
      }
    })
  }
}
