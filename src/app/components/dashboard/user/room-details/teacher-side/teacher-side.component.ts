import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-side',
  templateUrl: './teacher-side.component.html',
  styleUrls: ['./teacher-side.component.scss', '../../../../../../assets/admin/css/styles.min.css']
})
export class TeacherSideComponent implements OnInit {

  homeActive: any;
  cwActive: any;
  peopleActive: any;
  gradesActive: any;
  getUrl: any;
  constructor() { }

  ngOnInit(): void {
    this.getActiveClass();
  }
  //set active on header 
  getActiveClass() {
    setTimeout(() => {
      this.getUrl = window.location.href;
      const page = this.getUrl.split('/');
      console.log(page[7]);
      if (page[7] === 'home') {
        this.homeActive = 'active';
        this.cwActive = 'not-active';
        this.peopleActive = 'not-active';
        this.gradesActive = 'not-active';
      } else if (page[7] === 'class-work') {
        this.homeActive = 'not-active';
        this.cwActive = 'active';
        this.peopleActive = 'not-active';
        this.gradesActive = 'not-active';
      } else if (page[7] === 'invites') {
        this.homeActive = 'not-active';
        this.cwActive = 'not-active';
        this.peopleActive = 'active';
        this.gradesActive = 'not-active';
      }
    });

  }
}
