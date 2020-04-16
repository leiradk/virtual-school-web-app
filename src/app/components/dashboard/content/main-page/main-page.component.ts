import { Component, OnInit } from '@angular/core';
import { SystemUtils } from '../../../../services/system.utils';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(
    private system: SystemUtils
  ) { }

  ngOnInit(): void {
    const data = this.system.retrieveItem("userData");
    console.log(data);
  }

}
