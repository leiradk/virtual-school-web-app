import { Component, OnInit } from '@angular/core';
import { ApiHostService } from '../../../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../../../services/system.utils';
import { SharedWorkDetailsService } from '../../../../../../../services/shared-work-details.service';

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
  downloadFile: any;
  workDetails: any;
  userData: any;
  submittedTask: any;
  reviewData: any;
  index: any;
  getAllClasswork: any;
  workData: any;
  message: any;
  disable: boolean = false;
  totalGrade: any = 0;
  constructor(
    private apiService: ApiHostService,
    private sharedWork: SharedWorkDetailsService,
    private system: SystemUtils,
  ) { }


  showSpinner: boolean = true;

  ngOnInit(): void {
    // console.log('workview');
    this.userData = this.system.retrieveItem('userData');
    this.sharedWork.workDetails.subscribe((workDetails: any) => {
      this.index = workDetails;
      this.sharedWork.classWork.subscribe((classWork: any) => {
        this.getAllClasswork = classWork;
        this.workDetails = this.getAllClasswork[this.index];
      })
    })
    this.getSubmittedWorks();
  }

  next() {
    if (this.index === (this.getAllClasswork.length - 1)) {
      this.index = this.getAllClasswork.length - 1;
    } else {
      this.showSpinner = true;
      this.index = this.index + 1;
      this.sharedWork.setRouteToken(this.index);
      this.workDetails = this.getAllClasswork[this.index];
      this.getSubmittedWorks();
    }


  }
  prev() {
    if (this.index === 0) {
      this.index = 0;
    } else {
      this.showSpinner = true;
      this.index = this.index - 1;
      this.sharedWork.setRouteToken(this.index);
      this.workDetails = this.getAllClasswork[this.index];
      this.getSubmittedWorks();
    }

  }
  getSubmittedWorks() {
    this.disable = true;
    this.submittedTask = null;
    const { token } = this.userData;
    const { classworkID } = this.workDetails;
    this.apiService.getClassworkSubmissions(classworkID, token)
      .subscribe((response: any) => {
        const { status } = response;
        if (status === 200) {
          const { submitted } = response.body;
          this.submittedTask = submitted;
          this.disable = false;
          this.showSpinner = false;
        }
      }, (error: any) => {
        this.disable = false;
        this.showSpinner = false;
        console.log(error)
      })
  }

  download(file) {
    const downloadLink = document.createElement("a");

    if (this.submittedTask.attachmentFilename === null) {
      const fileName = "Unnamed.pptx";
      downloadLink.download = fileName;

    } else {
      const fileName = this.submittedTask.attachmentFilename;
      downloadLink.download = fileName;

    }
    this.downloadFile = "data:application/pdf;base64," + file;


    downloadLink.href = this.downloadFile;
    downloadLink.click();
  }

  modalData(workData) {

    this.reviewData = workData;
    this.message = this.reviewData.messageAnswer;

    // console.log(this.reviewData.replace(/<[^>]*>/, ''));
  }

  setGrade(value) {
    this.totalGrade = value;
  }
  setReview() {
    const payload = {
      token: this.userData.token,
      classworkID: this.workDetails.classworkID,
      answeredID: this.reviewData.answeredID,
      points: this.totalGrade,
    }
    this.apiService.submitClassworkPoints(payload)
      .subscribe((response: any) => {
        console.log(response);
      }, (error: any) => {
        console.log(error);
      })
  }
}
