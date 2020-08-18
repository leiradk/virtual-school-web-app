import { Component, OnInit } from '@angular/core';
import { ApiHostService } from '../../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../../services/system.utils';
@Component({
  selector: 'app-my-teachers',
  templateUrl: './my-teachers.component.html',
  styleUrls: ['./my-teachers.component.scss']
})
export class MyTeachersComponent implements OnInit {

  myTeachers: any;
  myClasses: any;
  constructor(
    private apiService: ApiHostService,
    private system: SystemUtils
  ) { }
  ngOnInit(): void {
    const userData = this.system.retrieveItem('userData');
    this.apiService.getMyTeacherList(userData.token)
      .subscribe((response: any) => {
        console.log(response)
        this.myTeachers = response.body.teachers;
        this.myClasses = response.body.classes;
      }, (error) => {
        console.log(error)
      })
  }

}
