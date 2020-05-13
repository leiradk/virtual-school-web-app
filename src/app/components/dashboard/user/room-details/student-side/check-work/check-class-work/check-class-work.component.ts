import { Component, OnInit } from '@angular/core';
import { SharedWorkDetailsService } from '../../../../../../../services/shared-work-details.service';
import { SystemUtils } from '../../../../../../../services/system.utils';

@Component({
  selector: 'app-check-class-work',
  templateUrl: './check-class-work.component.html',
  styleUrls: ['./check-class-work.component.scss',
    '../../../../../../../../assets/teacher/css/classwork/style.css',
    '../../../../../../../../assets/teacher/css/classwork/dropzone.css',
    '../../../../../../../../assets/teacher/css/classwork/fancytree.css',
    '../../../../../../../../assets/teacher/css/classwork/nouislider.css']
})
export class CheckClassWorkComponent implements OnInit {

  workData: any;
  classDetails: any;
  downloadFile: any;
  fileName: any;
  base64textString: any;
  constructor(
    private workDetails: SharedWorkDetailsService,
    private system: SystemUtils
  ) { }

  ngOnInit(): void {
    // this.workDetails.workDetails.subscribe((response: any) => {
    //   this.workData = response;
    //   console.log(response);
    //   console.log('data');
    // })
    this.workData = this.system.retrieveItem('workDetails');
    this.classDetails = this.system.retrieveItem('classDetails');
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
}
