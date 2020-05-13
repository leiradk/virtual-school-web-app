import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-work-details',
  templateUrl: './view-work-details.component.html',
  styleUrls: ['./view-work-details.component.scss',
  '../../../../../../../../assets/teacher/css/classwork/style.css',
  '../../../../../../../../assets/teacher/css/classwork/dropzone.css',
  '../../../../../../../../assets/teacher/css/classwork/fancytree.css',
  '../../../../../../../../assets/teacher/css/classwork/nouislider.css']
})
export class ViewWorkDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('workview');
  
  }

}
