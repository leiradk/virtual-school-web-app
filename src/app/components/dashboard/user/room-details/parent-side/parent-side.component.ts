import { Component, OnInit } from '@angular/core';
import { SystemUtils } from "../../../../../services/system.utils";
import { ApiHostService } from '../../../../../services/api-host.service';

@Component({
  selector: 'app-parent-side',
  templateUrl: './parent-side.component.html',
  styleUrls: ['./parent-side.component.scss']
})
export class ParentSideComponent implements OnInit {


  homeActive: any;
  cwActive: any;
  peopleActive: any;
  gradesActive: any;
  getUrl: any;
  breadcrumbAdd: any;
  classworks: any;

  constructor(
    private system: SystemUtils,
    private apiHost: ApiHostService
  ) { }

  ngOnInit(): void {

    this.cwActive = 'active';
    this.getActiveClass();

  }
  //set active on header 
  getActiveClass() {
    setTimeout(() => {
      this.getUrl = window.location.href;
      const page = this.getUrl.split('/');
      console.log(page)
      if (page[6] === 'home' || page[7] === 'home') {
        this.homeActive = 'active';
        this.cwActive = 'not-active';
        this.peopleActive = 'not-active';
        this.gradesActive = 'not-active';
        this.breadcrumbAdd = 'Home';
      } else if (page[6] === 'classwork' || page[7] === 'classwork') {
        this.homeActive = 'not-active';
        this.cwActive = 'active';
        this.peopleActive = 'not-active';
        this.gradesActive = 'not-active';
        this.breadcrumbAdd = 'Classwork';
      } else if (page[6] === 'grades' || page[7] === 'grades') {
        this.homeActive = 'not-active';
        this.cwActive = 'not-active';
        this.peopleActive = 'not-active';
        this.gradesActive = 'active';
        this.breadcrumbAdd = 'Grades';
      }
    });

  }
}
