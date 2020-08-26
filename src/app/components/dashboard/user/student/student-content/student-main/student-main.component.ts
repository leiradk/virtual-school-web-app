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
        console.log('totalTeachers:', response)
        const { classes } = response.body[0]; 
        console.log(classes)
        this.totalTeacherCount = classes
      }, (error: any) => {
        console.log('totalTeachers:', error)
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
      console.log('totalClasses:', response)
      const { classes } = response.body[0]; 
      console.log(classes)
      this.totalClassesCount = classes
    }, (error: any) => {
      console.log('totalStudentsError:', error)
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
      console.log('totalParents:', response)
      const { badges } = response.body[0]; 
      console.log(badges)
      this.totalBadgeCount = badges
    }, (error: any) => {
      console.log('totalStudentsError:', error)
      if(error.status === 404) {
        if(error.statusText === "Not Found") {
          this.totalBadgeCount = 0;
        }
      }
    })
  }
}
