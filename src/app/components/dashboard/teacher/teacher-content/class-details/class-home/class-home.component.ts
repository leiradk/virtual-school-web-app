import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-home',
  templateUrl: './class-home.component.html',
  styleUrls: ['./class-home.component.scss']
})
export class ClassHomeComponent implements OnInit {
  myFocusVar: any = false;
  comments: any = [];
  constructor() { }

  ngOnInit(): void {
    this.comments = [{
      user: "Wilver Deypalubos",
      comment: "this is a comment"
    },
    {
      user: "Melvin Elayron",
      comment: "this is a comment"
    }
  ]
  }

}
