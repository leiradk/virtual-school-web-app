import { Component, OnInit } from "@angular/core";
import { SystemUtils } from "../../../../services/system.utils";
import { Router } from "@angular/router";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"],
})
export class MainPageComponent implements OnInit {
  data: any = [];
  constructor(private system: SystemUtils, private router: Router) {}

  ngOnInit(): void {
    this.data = this.system.retrieveItem("userData");
    console.log(this.data);
    if (this.data === undefined || this.data === null) {
      this.router.navigate(["/Landing-Page"]);
    } else {
      const { token } = this.data;
      if (token === undefined) {
        this.router.navigate(["/Landing-Page"]);
      }
    }
  }
}
