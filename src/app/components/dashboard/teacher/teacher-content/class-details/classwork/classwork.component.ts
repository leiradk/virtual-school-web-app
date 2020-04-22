import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classwork',
  templateUrl: './classwork.component.html',
  styleUrls: ['./classwork.component.scss']
})
export class ClassworkComponent implements OnInit {
  p: number = 1;
  searchText;
  viewList: number = 5;
  file: any;
  constructor() { }

  ngOnInit(): void {
    this.file = [{
      file: 'file',
      filename: 'filename',
      date: 'date'
    }]
  }

}
