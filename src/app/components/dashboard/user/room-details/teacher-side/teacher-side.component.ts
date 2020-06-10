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
  breadcrumbAdd: any;
  constructor() { }

  ngOnInit(): void {
    this.getActiveClass();
  }
  //set active on header 
  getActiveClass() {
    setTimeout(() => {
      this.getUrl = window.location.href;
      const page = this.getUrl.split('/');
      if (page[7] === 'home' || page[6] === 'home') {
        this.homeActive = 'active';
        this.cwActive = 'not-active';
        this.peopleActive = 'not-active';
        this.gradesActive = 'not-active';
        this.breadcrumbAdd = 'Home';
      } else if (page[7] === 'class-work' || page[6] === 'class-work') {
        this.homeActive = 'not-active';
        this.cwActive = 'active';
        this.peopleActive = 'not-active';
        this.gradesActive = 'not-active';
        this.breadcrumbAdd = 'Classwork';
      } else if (page[7] === 'invites' || page[6] === 'invites') {
        this.homeActive = 'not-active';
        this.cwActive = 'not-active';
        this.peopleActive = 'active';
        this.gradesActive = 'not-active';
        this.breadcrumbAdd = 'People';
      } else if (page[7] === 'grades' || page[6] === 'grades') {
        this.homeActive = 'not-active';
        this.cwActive = 'not-active';
        this.peopleActive = 'not-active';
        this.gradesActive = 'active';
        this.breadcrumbAdd = 'People';
      }
    });
  }
}
