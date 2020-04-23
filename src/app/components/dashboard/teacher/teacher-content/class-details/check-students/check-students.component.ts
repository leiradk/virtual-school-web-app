import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-students',
  templateUrl: './check-students.component.html',
  styleUrls: ['./check-students.component.scss']
})
export class CheckStudentsComponent implements OnInit {

  student: any;
  constructor() { }

  ngOnInit(): void {
    this.student = [
      {
        name: 'wilver deypalubos',
        status: 'Pending'
      },
      {
        name: 'Ariel Delo Santos',
        status: 'Pending'
      },
      {
        name: 'Blythe lobrigas',
        status: 'Pending'
      },
      {
        name: 'Melvin Elayron',
        status: 'Pending'
      },
    ]

  }

}
