import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})

export class StudentComponent {


  constructor() { }

  toggle:boolean;

  receiveMessage($event) {
    this.toggle = $event
  }
}
