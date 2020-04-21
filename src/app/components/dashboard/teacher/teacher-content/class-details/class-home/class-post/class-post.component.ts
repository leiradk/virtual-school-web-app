import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-class-post',
  templateUrl: './class-post.component.html',
  styleUrls: ['./class-post.component.scss']
})

export class ClassPostComponent implements OnInit {
  myFocusVar: any = false;
  comments: any = [];
  constructor() { }

  isSticky: boolean = false;

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

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
}
