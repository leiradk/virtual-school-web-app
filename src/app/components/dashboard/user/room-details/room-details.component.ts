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
      // this.myFunction();

      // OR

      // this.yuorService.doActon().subscribe(() => {
      //     alert('did something before refresh');  
      // });

      // OR
      this.sharedWork.workDetails.subscribe((response: any) => {
        console.log(response);
        this.system.storeLocal('workDetails', response);
      })
    };
  }

  setWorkDetails() {
    this.workDetails = this.system.retrieveItem("workDetails");
    this.sharedWork.setRouteToken(this.workDetails);
    this.system.deleteKey('workDetails');

  }

}
