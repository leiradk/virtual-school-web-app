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
  constructor(
    private apiService: ApiHostService,
    private sharedWork: SharedWorkDetailsService,
    private system: SystemUtils,
  ) { }

  ngOnInit(): void {
    console.log('workview');
    this.userData = this.system.retrieveItem('userData');
    this.sharedWork.workDetails.subscribe((response: any) => {
      console.log(response)

      this.workDetails = response;
      console.log('data');
      console.log(this.workDetails)
    })
    this.getSubmittedWorks();

  }

  getSubmittedWorks() {
    const { token } = this.userData;
    const { classworkID } = this.workDetails;
    this.apiService.getClassworkSubmissions(classworkID, token)
      .subscribe((response: any) => {
        console.log(response)
        const { status } = response;
        if (status === 200) {
          const { submitted } = response.body;
          this.submittedTask = submitted;
        }
      }, (error: any) => {
        console.log(error)
      })
  }
  download(file) {
    this.downloadFile = "data:application/pdf;base64," + file;
    console.log('data');
    console.log(this.downloadFile);
    const downloadLink = document.createElement("a");
    const fileName = "sample.pptx";

    downloadLink.href = this.downloadFile;
    downloadLink.download = fileName;
    downloadLink.click();
  }
}
