import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-post',
  templateUrl: './class-post.component.html',
  styleUrls: ['./class-post.component.scss']
})
export class ClassPostComponent implements OnInit {
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
