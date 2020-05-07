import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss',
    '../../../../../../../../assets/teacher/css/classwork/style.css',
    '../../../../../../../../assets/teacher/css/classwork/bootstrap-datepicker.css',
    '../../../../../../../../assets/teacher/css/classwork/nestable.css',
    '../../../../../../../../assets/teacher/css/classwork/summernote.css']
})
export class DetailsComponent implements OnInit {
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
  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }

}
