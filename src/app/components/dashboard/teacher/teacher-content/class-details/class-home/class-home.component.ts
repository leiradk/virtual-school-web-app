import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-home',
  templateUrl: './class-home.component.html',
  styleUrls: ['./class-home.component.scss']
})
export class ClassHomeComponent implements OnInit {
  myFocusVar: any = false;
  constructor() { }

  ngOnInit(): void {
  }

}
