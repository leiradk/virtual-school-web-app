import { Component, OnInit } from '@angular/core';
import { SystemUtils } from '../../../../../../services/system.utils';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.scss']
})
export class TeacherHomeComponent implements OnInit {
  myFocusVar: any = false;
  comments: any = [];
  classDetails: any;
  constructor(
    private system: SystemUtils,
  ) { }

  ngOnInit(): void {
    this.classDetails = this.system.retrieveItem('classDetails');

  }

}
