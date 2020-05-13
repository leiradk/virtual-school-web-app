import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss',
  '../../../../../../../../../assets/teacher/css/classwork/style.css',
  '../../../../../../../../../assets/teacher/css/classwork/dropzone.css',
  '../../../../../../../../../assets/teacher/css/classwork/fancytree.css']
})
export class LessonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
