import { Component, OnInit } from '@angular/core';
import { SystemUtils } from "../../../../../services/system.utils";
import { ApiHostService } from '../../../../../services/api-host.service';

@Component({
  selector: 'app-parent-side',
  templateUrl: './parent-side.component.html',
  styleUrls: ['./parent-side.component.scss']
})
export class ParentSideComponent implements OnInit {


  homeActive: any;
  cwActive: any;
  peopleActive: any;
  gradesActive: any;
  getUrl: any;
  breadcrumbAdd: any;
  constructor(
    private system: SystemUtils,
    private apiHost: ApiHostService
  ) { }

  ngOnInit(): void {

    const userdata = this.system.retrieveItem('userData')
    const studentdata = this.system.retrieveItem('studentData')
    const roomdata = this.system.retrieveItem('classData')
    console.log(userdata.token)
    console.log(studentdata.userID)
    console.log(roomdata.classID)
    this.apiHost.getStudentClasswork(userdata.token, studentdata.userID, roomdata.classID)
      .subscribe((response: any) => {
        console.log(response)
      }, (error: any) => {
        console.log(error)
      })

    this.getActiveClass();

  }
  //set active on header 
  getActiveClass() {
    setTimeout(() => {
      this.getUrl = window.location.href;
      const page = this.getUrl.split('/');
      if (page[6] === 'home' || page[7] === 'home') {
        this.homeActive = 'active';
        this.cwActive = 'not-active';
        this.peopleActive = 'not-active';
        this.gradesActive = 'not-active';
        this.breadcrumbAdd = 'Home';
      } else if (page[6] === 'class-work' || page[7] === 'class-work') {
        this.homeActive = 'not-active';
        this.cwActive = 'active';
        this.peopleActive = 'not-active';
        this.gradesActive = 'not-active';
        this.breadcrumbAdd = 'Classwork';
      } else if (page[6] === 'people' || page[7] === 'people') {
        this.homeActive = 'not-active';
        this.cwActive = 'not-active';
        this.peopleActive = 'active';
        this.gradesActive = 'not-active';
        this.breadcrumbAdd = 'People';
      }
    });

  }
}
