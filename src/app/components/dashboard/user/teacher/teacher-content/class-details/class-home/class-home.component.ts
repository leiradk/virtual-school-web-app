import { Component, OnInit } from '@angular/core';
import { SystemUtils } from '../../../../../../../services/system.utils';
import { Router } from "@angular/router";
// import { Location } from '@angular/common';

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
    private system: SystemUtils,
    private router: Router,
    // private location: Location
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

    // this.router.navigateByUrl("/teacher/class-details", { skipLocationChange: true }).then(() => {
    //   this.router.navigate([decodeURI(this.location.path())]);
    // });
    this.classDetails = this.system.retrieveItem('classDetails');
  }

}
