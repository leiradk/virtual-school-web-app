import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiHostService } from '../../../../services/api-host.service';
import { SystemUtils } from '../../../../services/system.utils';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacher-sidebar',
  templateUrl: './teacher-sidebar.component.html',
  styleUrls: ['./teacher-sidebar.component.scss']
})
export class TeacherSidebarComponent implements OnInit {
  userData: any;
  classDetails: any;
  constructor(
    private apiService: ApiHostService,
    private system: SystemUtils,
    private router: Router,
    // private location: Location
  ) { }


  public toggle: boolean = false;
  public togClass: boolean = false;

  ngOnInit(): void {
    this.userData = this.system.retrieveItem('userData');
    this.getClassroom(this.userData);
  }

  viewDetails(data) {
    this.system.storeLocal('classDetails', data);

  }

  //getting all classroom for one specific teacher
  getClassroom(data) {
    const { token } = data;
    this.apiService.getClassroom(token)
      .subscribe((response: any) => {
        const { status, message, body } = response;
        if (status === 200) {
          this.classDetails = body;
        }
      });
  }

  @Output() messageEvent = new EventEmitter<boolean>();

  clickEvent(event) {
    this.toggle = !this.toggle;
    this.messageEvent.emit(this.toggle)
  }

  toggleClass() {
    this.togClass = !this.togClass;
  }
}
