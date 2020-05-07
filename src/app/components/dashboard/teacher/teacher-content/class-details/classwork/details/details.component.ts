import { Component, OnInit, HostListener } from '@angular/core';
import { ApiHostService } from '../../../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../../../services/system.utils';

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
  classDetails: any;
  userData: any;
  error: any;
  errorMessage: any;
  constructor(
    private apiService: ApiHostService,
    private system: SystemUtils
  ) { }

  ngOnInit(): void {
    this.classDetails = this.system.retrieveItem('classDetails');
    this.userData = this.system.retrieveItem('userData');
    this.getClasswork(this.classDetails, this.userData);

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

  getClasswork(classID, userID) {
    const { token } = userID;
    const { id } = classID;

    this.apiService.getClassworkTeacher(id, token)
      .subscribe((response: any) => {
        console.log(response);
      }, (error: any) => {
        const { message, status } = error.error;

        if (status === 404) {
          this.error = true;
          this.errorMessage = message;
          console.log(message);
        }
      })
  }
}
