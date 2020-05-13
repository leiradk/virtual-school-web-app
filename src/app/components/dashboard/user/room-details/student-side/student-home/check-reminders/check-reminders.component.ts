import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-check-reminders',
  templateUrl: './check-reminders.component.html',
  styleUrls: ['./check-reminders.component.scss']
})
export class CheckRemindersComponent implements OnInit {

  isSticky: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
}
