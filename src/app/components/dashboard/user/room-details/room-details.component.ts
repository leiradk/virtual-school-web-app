import { Component, OnInit } from '@angular/core';
import { SystemUtils } from "../../../../services/system.utils";
import { SharedWorkDetailsService } from "../../../../services/shared-work-details.service";
import { take } from 'rxjs/operators';

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
    this.setWorkDetails();
  

    window.onbeforeunload = (ev) => {

      this.sharedWork.workDetails.pipe(take(1)).subscribe((response: any) => {
        console.log(response);
        this.system.storeLocal('workDetails', response);
      })
      this.sharedWork.classWork.pipe(take(1)).subscribe((response: any) => {
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
