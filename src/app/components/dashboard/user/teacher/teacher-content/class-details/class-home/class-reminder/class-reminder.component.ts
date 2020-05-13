import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-class-reminder',
  templateUrl: './class-reminder.component.html',
  styleUrls: ['./class-reminder.component.scss']
})
export class ClassReminderComponent implements OnInit {

  isSticky: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }

}
