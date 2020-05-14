import { Component, OnInit, HostListener } from '@angular/core';
import { ApiHostService } from '../../../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../../../services/system.utils';
import { SharedWorkDetailsService } from '../../../../../../../services/shared-work-details.service';

@Component({
  selector: 'app-check-details',
  templateUrl: './check-details.component.html',
  styleUrls: ['./check-details.component.scss',
    '../../../../../../../../assets/teacher/css/classwork/style.css',
    '../../../../../../../../assets/teacher/css/classwork/dropzone.css',
    '../../../../../../../../assets/teacher/css/classwork/fancytree.css',
    '../../../../../../../../assets/teacher/css/classwork/nouislider.css']
})
export class CheckDetailsComponent implements OnInit {

  p: number = 1;
  searchText;
  viewList: number = 5;
  file: any;
  classDetails: any;
  userData: any;
  error: any;
  errorMessage: any;
  placement = 'bottom';
  base64textString: any;
  fileName: any;
  teacherAccount: any;
  classWork: any;
  downloadFile: any;
  public isCollapsed: boolean[] = [];
  constructor(
    private apiService: ApiHostService,
    private workDetails: SharedWorkDetailsService,
    private system: SystemUtils,
  ) {
  }

  ngOnInit(): void {
    this.classDetails = this.system.retrieveItem('classDetails');
    this.userData = this.system.retrieveItem('userData');
    this.getClasswork(this.classDetails, this.userData);
    console.log(this.userData)
    const { data } = this.userData;
    if (data.usertype === "10002") {
      this.teacherAccount = true;
    }
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

  public tools: object = {
    items: [
      'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
      'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
      'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
      'Indent', 'Outdent', '|', 'CreateLink', 'CreateTable',
      'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
  };

  public value: string = `
    <p>The RichTextEditor triggers events based on its actions. </p>
    <p> The events can be used as an extension point to perform custom operations.</p>`

  getClasswork(classID, userID) {
    const { token } = userID;
    const { rid } = classID;
    this.workDetails.classWork.subscribe((response: any) => {
      console.log('classwork:', response);
      if (response === null || response === undefined) {
        console.log('empty')
        this.apiService.getClassworkStudent(rid, token)
          .subscribe((response: any) => {
            // console.log(response);
            const { classworks } = response.body;
            this.classWork = classworks;
            this.workDetails.setClassWork(this.classWork);
            // console.log(this.classWork)
          }, (error: any) => {
            const { message, status } = error.error;
            console.log(error);
            if (status === 404) {
              this.error = true;
              this.errorMessage = message;
              console.log(message);
            }
          })
      } else {
        console.log('not empty')
        this.classWork = response;
      }
    })


  }


  onFileChange(event) {
    var files = event.target.files;
    var file = files[0];
    console.log(files[0])
    this.fileName = file.name;
    if (files && file) {
      var reader = new FileReader();

      reader.onload = this.handleFile.bind(this);

      reader.readAsBinaryString(file);
      // console.log(reader.readAsBinaryString(file));

    }
  }
  handleFile(event) {
    var binaryString = event.target.result;
    // console.log(binaryString);
    this.base64textString = btoa(binaryString);
    // console.log(btoa(binaryString));
    // this.classWorkForm.value.workFile = this.base64textString;
    // console.log(this.classWorkForm)
  }

  download(attachment) {
    this.downloadFile = "data:application/pdf;base64," + attachment;
    // console.log('data');
    // console.log(this.downloadFile);
    const downloadLink = document.createElement("a");
    const fileName = "sample.pptx";

    downloadLink.href = this.downloadFile;
    downloadLink.download = fileName;
    downloadLink.click();
  }

  dueDateVal(date) {
    const dateSplit = date.split(' ');
    return dateSplit[0];
  }
  viewDetails(work) {
    this.workDetails.setRouteToken(work);
    // this.system.storeLocal('workDetails', work);
    this.workDetails.workDetails.subscribe((response: any) => {
      console.log(response);
      // this.system.storeLocal('workDetails', response);
    })
  }
}
