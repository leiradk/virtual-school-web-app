import { Component, OnInit } from '@angular/core';
import { SystemUtils } from "../../../services/system.utils";
import { Router } from "@angular/router";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  data: any;
  constructor(
    private system: SystemUtils,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.data = this.system.retrieveItem("userData");
    if (this.data === undefined || this.data === null) {
      this.router.navigate(["/Landing-Page"]);
    } else {
      const { token } = this.data;

      if (token === undefined) {
        this.router.navigate(["/Landing-Page"]);
      } else {
        const { data } = this.data;
        // console.log(data.usertype);
        if (parseInt(data.usertype) === 10001) {
          // console.log('wewwe');
          this.router.navigate(["/dashboard"]);

        }
      }
    }
  }

  toggle:boolean;

  receiveMessage($event) {
    this.toggle = $event
  }
}
