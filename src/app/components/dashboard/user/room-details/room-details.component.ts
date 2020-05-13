import { Component, OnInit } from '@angular/core';
import { SystemUtils } from "../../../../services/system.utils";

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit {
  data: any;
  userType: any;
  constructor(
    private system: SystemUtils
  ) { }

  ngOnInit(): void {
    this.data = this.system.retrieveItem("userData");
    const { usertype } = this.data.data;
    this.userType = usertype;
    console.log(usertype)
  }

}
