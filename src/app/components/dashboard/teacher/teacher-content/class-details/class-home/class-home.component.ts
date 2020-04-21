import { Component, OnInit } from '@angular/core';
import { SystemUtils } from '../../../../../../services/system.utils';

@Component({
  selector: 'app-class-home',
  templateUrl: './class-home.component.html',
  styleUrls: ['./class-home.component.scss']
})
export class ClassHomeComponent implements OnInit {
  myFocusVar: any = false;
  comments: any = [];
  classDetails: any;
  constructor(
    private system: SystemUtils
  ) { }

  ngOnInit(): void {
    this.comments = [{
      user: "Wilver Deypalubos",
      comment: "this is a comment"
    },
    {
      user: "Melvin Elayron",
      comment: "this is a comment"
    }
  ];
  this.classDetails = this.system.retrieveItem('classDetails');
  }

}
