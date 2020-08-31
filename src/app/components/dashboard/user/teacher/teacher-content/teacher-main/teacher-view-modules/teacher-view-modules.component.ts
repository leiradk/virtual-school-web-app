import { Component, OnInit } from '@angular/core';
import { ApiHostService } from '../../../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../../../services/system.utils';

@Component({
  selector: 'app-teacher-view-modules',
  templateUrl: './teacher-view-modules.component.html',
  styleUrls: ['./teacher-view-modules.component.scss']
})
export class TeacherViewModulesComponent implements OnInit {

  searchModule: any;
  library: any;
  userData: any;
  search: any;
  modules: any;
  gradeLevel = [
    { id: 1, name: 'Grade 1' },
    { id: 2, name: 'Grade 2' },
    { id: 3, name: 'Grade 3' },
    { id: 4, name: 'Grade 4' },
    { id: 5, name: 'Grade 5' },
    { id: 6, name: 'Grade 6' },
    { id: 7, name: 'Grade 7' },
    { id: 8, name: 'Grade 8' },
    { id: 9, name: 'Grade 9' },
    { id: 10, name: 'Grade 10' },
    { id: 11, name: 'Grade 11' },
    { id: 12, name: 'Grade 12' },
  ];

  subjects = [
    { id: 1, subject: 'English' },
    { id: 2, subject: 'Mathematics' },
    { id: 3, subject: 'Science' },
    { id: 4, subject: 'Physical Education' },
    { id: 5, subject: 'History' },
  ];
  constructor(
    private apiHost: ApiHostService,
    private system: SystemUtils,
  ) { }

  ngOnInit(): void {
    this.userData = this.system.retrieveItem('userData');
    this.library = [
      {
        title: 'Module 1',
        Subject: 'Science',
        Grade: 1
      },
      {
        title: 'Module 2',
        Subject: 'Math',
        Grade: 2
      },
      {
        title: 'Module 3',
        Subject: 'PE',
        Grade: 5
      }
    ]
    this.getModules();
  }

  getModules() {
    this.apiHost.getModuleTeacher(this.userData.token)
      .subscribe((response: any) => {
        // console.log(response)
        this.modules = response.body.modules;
      }, (error: any) => {
        console.log(error)
      })
  }

  dateCreated(date){
    const splitDate = date.split(' ');
    return splitDate[0];
  }
}
