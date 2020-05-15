import { Component, OnInit } from '@angular/core';
import { SharedWorkDetailsService } from '../../../../../../../services/shared-work-details.service';
import { SystemUtils } from '../../../../../../../services/system.utils';
import { ApiHostService } from '../../../../../../../services/api-host.service';
import { ToastrService } from "ngx-toastr";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";

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
  public submitWorkForm: FormGroup;

  workData: any;
  classDetails: any;
  downloadFile: any;
  fileName: any;
  userData: any;
  base64textString: any;
  constructor(
    private workDetails: SharedWorkDetailsService,
    private system: SystemUtils,
    private apiService: ApiHostService,
    private fb: FormBuilder,
    private toastr: ToastrService,

  ) { this.submitWorkModel() }

  showSpinner: boolean = false;

  ngOnInit(): void {
    this.workDetails.workDetails.subscribe((response: any) => {
      this.workData = response;
      console.log(response);
    })
    // this.workData = this.system.retrieveItem('workDetails');
    this.classDetails = this.system.retrieveItem('classDetails');
    this.userData = this.system.retrieveItem('userData');
  }

  submitWorkModel() {
    this.submitWorkForm = this.fb.group({
      comment: [null, Validators.required],
      file: [null, Validators.required],
    });
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
    this.submitWorkForm.value.file = btoa(binaryString);
    // console.log(btoa(binaryString));
    // this.classWorkForm.value.workFile = this.base64textString;
    // console.log(this.classWorkForm)
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

  onSubmit() {
    this.showSpinner = true;

    console.log(this.workData);
    const payload = {
      token: this.userData.token,
      classworkID: this.workData.classworkID,
      messageAnswer: this.submitWorkForm.value.comment,
      attachment: this.submitWorkForm.value.file
    }


    console.log(payload)

    this.apiService.submitClasswork(payload)
      .subscribe((response: any) => {

        // const { status, body } = response;
        if (response === 201) {
          //
          //   PLEASE
          //   FIX HERE - Elay
          //
          const { status, body } = response;
          this.toastr.success('Answer submitted successfully!', 'Congratulations', { timeOut: 5000 })
          this.showSpinner = false;
        }
      }, (error: any) => {
        const { message, status } = error.error;
        console.log(error);
        if (status === 403) {
          this.toastr.error(message, 'Error', { timeOut: 5000 })
          this.showSpinner = false;
        }
      })
  }
}
