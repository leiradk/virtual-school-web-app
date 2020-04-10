import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  load = false;
  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    // this.load = true;
    // }, 1000)

  }

}
