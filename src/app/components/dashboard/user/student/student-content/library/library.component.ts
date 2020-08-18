import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  searchModule: any;
  library: any;
  constructor() { }

  ngOnInit(): void {
    this.library = [
      {
        title: 'Module 1',
        Subject: 'Science',
        Grade: 1
      },
      {
        title: 'Module 2',
        Subject: 'Math',
        Grade: 2
      },
      {
        title: 'Module 3',
        Subject: 'PE',
        Grade: 5
      }
    ]
  }

}
