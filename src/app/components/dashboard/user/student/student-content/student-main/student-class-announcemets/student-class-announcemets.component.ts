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
  noPostFound: boolean = false;
  noPostMessage: any;
  fetchingData: boolean = false;
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
    this.fetchingData = true;
    this.apiHost.getAllPostOnStudent(token)
      .subscribe((response: any) => {
        this.noPostFound = false
        this.fetchingData = false;
        console.log(response)
        this.classPosts = response.body.posts;
      }, (error: any) => {
        console.log(error)
        this.fetchingData = false;
        this.noPostFound = true;
        const { status } = error;
        if(status === 404){
          this.noPostMessage = 'No Announcements found'
        } else {
          this.noPostMessage = 'Something went wrong'
        }
      })
  }
}
