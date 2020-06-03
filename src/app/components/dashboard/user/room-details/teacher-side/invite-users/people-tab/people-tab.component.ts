import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-people-tab',
  templateUrl: './people-tab.component.html',
  styleUrls: ['./people-tab.component.scss']
})
export class PeopleTabComponent implements OnInit {
  isSticky: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
}
