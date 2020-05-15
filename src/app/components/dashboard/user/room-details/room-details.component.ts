import { Component, OnInit } from '@angular/core';
import { SystemUtils } from "../../../../services/system.utils";
import { SharedWorkDetailsService } from "../../../../services/shared-work-details.service";

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit {
  data: any;
  userType: any;
  workDetails: any;
  classWork: any;
  constructor(
    private system: SystemUtils,
    private sharedWork: SharedWorkDetailsService,
  ) { }

  ngOnInit(): void {
    this.data = this.system.retrieveItem("userData");
    const { usertype } = this.data.data;
    this.userType = usertype;
    console.log(usertype)
    this.setWorkDetails();
    this.sharedWork.workDetails.subscribe((response: any) => {
      console.log(response);
      // this.system.storeLocal('workDetails', response);
    })

    window.onbeforeunload = (ev) => {

      this.sharedWork.workDetails.subscribe((response: any) => {
        console.log(response);
        this.system.storeLocal('workDetails', response);
      })
      this.sharedWork.classWork.subscribe((response: any) => {
        console.log(response);
        this.system.storeLocal('workList', response);
      })
    };
  }

  setWorkDetails() {
    this.workDetails = this.system.retrieveItem("workDetails");
    this.classWork = this.system.retrieveItem("workList");
    this.sharedWork.setRouteToken(this.workDetails);
    this.sharedWork.setClassWork(this.classWork);
    this.system.deleteKey('workList');
    this.system.deleteKey('workDetails');

  }

}
