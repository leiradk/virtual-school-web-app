import { Component, OnInit } from '@angular/core';
import { SystemUtils } from '../../../../../../../../services/system.utils';
import { ApiHostService } from '../../../../../../../../services/api-host.service';

@Component({
  selector: 'app-class-announcements',
  templateUrl: './class-announcements.component.html',
  styleUrls: ['./class-announcements.component.scss']
})
export class ClassAnnouncementsComponent implements OnInit {

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
    this.apiHost.getAllPostOnTeacher(token)
      .subscribe((response: any) => {
        console.log(response)
        this.classPosts = response.body.posts;
      }, (error: any) => {
        console.log(error)
      })
  }
}
