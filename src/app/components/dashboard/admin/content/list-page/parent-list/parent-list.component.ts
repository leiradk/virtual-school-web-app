import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.scss', "../../../../../../../assets/staff_teacher/css/styles.min.css"]
})
export class ParentListComponent implements OnInit {

  searchText;
  public people: any;
  p: number = 1;
  viewList: number = 5;
  constructor() { }

  ngOnInit(): void {

  }

}
