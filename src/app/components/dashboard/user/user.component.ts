import { Component, OnInit } from '@angular/core';
import { SystemUtils } from "../../../services/system.utils";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  data: any;
  userType: any;
  toggle: boolean;
  userData: any;
  constructor(
    private system: SystemUtils
  ) { }

  ngOnInit(): void {
    this.userData = this.system.retrieveItem('userData');
  }
  receiveMessage($event) {
    this.toggle = $event
  }
}
