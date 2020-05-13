import { Component, OnInit } from '@angular/core';
import { SystemUtils } from '../../../../../../services/system.utils';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {
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
