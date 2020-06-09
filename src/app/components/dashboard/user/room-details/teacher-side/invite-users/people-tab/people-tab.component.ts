import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-people-tab',
  templateUrl: './people-tab.component.html',
  styleUrls: ['./people-tab.component.scss']
})
export class PeopleTabComponent implements OnInit {
  isSticky: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.getSelectedTab();
  }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }


  getUrl: any;
  teacherActive: any;
  studentActive: any;
  guardianActive: any;

  getSelectedTab() {
    setTimeout(() => {
      this.getUrl = window.location.href;
      const page = this.getUrl.split('/');
      if (page[7] === 'teacher' || page[6] === 'teacher') {
        this.teacherActive = '';
        this.guardianActive = 'not-selected';
        this.studentActive = 'not-selected';
      } else if (page[7] === 'guardian' || page[6] === 'guardian') {
        this.teacherActive = 'not-selected';
        this.guardianActive = '';
        this.studentActive = 'not-selected';
      } else if (page[7] === 'student' || page[6] === 'student') {
        this.teacherActive = 'not-selected';
        this.guardianActive = 'not-selected';
        this.studentActive = '';
      }
    });
  }
}

