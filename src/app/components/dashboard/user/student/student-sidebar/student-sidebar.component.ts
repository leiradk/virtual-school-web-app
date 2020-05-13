import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-sidebar',
  templateUrl: './student-sidebar.component.html',
  styleUrls: ['./student-sidebar.component.scss']
})
export class StudentSidebarComponent {

  constructor() { }

  public toggle: boolean = false;

  @Output() messageEvent = new EventEmitter<boolean>();

  clickEvent(event) {
    this.toggle = !this.toggle;
    this.messageEvent.emit(this.toggle)
  }
}
