import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-side',
  templateUrl: './student-side.component.html',
  styleUrls: ['./student-side.component.scss']
})
export class StudentSideComponent implements OnInit {

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
      if (page[6] === 'home') {
        this.homeActive = 'active';
        this.cwActive = 'not-active';
        this.peopleActive = 'not-active';
        this.gradesActive = 'not-active';
      } else if (page[6] === 'class-work') {
        this.homeActive = 'not-active';
        this.cwActive = 'active';
        this.peopleActive = 'not-active';
        this.gradesActive = 'not-active';
      } else if (page[6] === 'people') {
        this.homeActive = 'not-active';
        this.cwActive = 'not-active';
        this.peopleActive = 'active';
        this.gradesActive = 'not-active';
      }
    });

  }
}
