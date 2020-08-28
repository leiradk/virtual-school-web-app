import { Component, OnInit } from '@angular/core';
import { SystemUtils } from '../../../../../../../services/system.utils';
import { ApiHostService } from '../../../../../../../services/api-host.service';

@Component({
  selector: 'app-student-class-announcemets',
  templateUrl: './student-class-announcemets.component.html',
  styleUrls: ['./student-class-announcemets.component.scss']
})
export class StudentClassAnnouncemetsComponent implements OnInit {

  classPosts: any;
  userData: any;
  constructor(
    private apiHost: ApiHostService,
    private system: SystemUtils
  ) { }

  ngOnInit(): void {
    this.userData = this.system.retrieveItem('userData');
    this.getAllClassPost();
  }

  getAllClassPost() {
    const { token } = this.userData;
    this.apiHost.getAllPostOnStudent(token)
      .subscribe((response: any) => {
        console.log(response)
        this.classPosts = response.body.posts;
      }, (error: any) => {
        console.log(error)
      })
  }
}
