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
  index: any;
  getAllClasswork: any;
  isNull: any;
  errorMessage: any;
  error: any;
  classWork: any;
  constructor(
    private workDetails: SharedWorkDetailsService,
    private system: SystemUtils,
    private apiService: ApiHostService,
    private fb: FormBuilder,
    private toastr: ToastrService,

  ) { this.submitWorkModel() }

  showSpinner: boolean = false;

  ngOnInit(): void {
    this.classDetails = this.system.retrieveItem('classDetails');
    this.userData = this.system.retrieveItem('userData');
    this.workDetails.index.subscribe((index: any) => {
      this.workDetails.classWork.subscribe((classWork: any) => {
        this.getAllClasswork = classWork;
        if (classWork == null || classWork == undefined) {
          // this.isNull = true;
          console.log('empty')
          this.showSpinner = true;
          this.updateClassWork(this.classDetails, this.userData);
        } else {
          if (index === null || index === null) {
          console.log('empty2')
          this.isNull = true;
            this.showSpinner = true;
            this.updateClassWork(this.classDetails, this.userData);
          } else {

          console.log('!empty')
          this.index = index;
            this.getAllClasswork = classWork;
            this.workData = this.getAllClasswork[this.index];
            this.isNull = false;
            // this.getSubmittedWorks();
          }
        }
      })
    })

    // this.workData = this.system.retrieveItem('workDetails');

  }

  next() {
    if (this.index === (this.getAllClasswork.length - 1)) {
      this.index = this.getAllClasswork.length - 1;
    } else {
      this.index = this.index + 1;
    }
    this.workDetails.setIndex(this.index);
    this.workData = this.getAllClasswork[this.index];
  }
  prev() {
    if (this.index === 0) {
      this.index = 0;
    } else {
      this.index = this.index - 1;
    }
    this.workDetails.setIndex(this.index);
    this.workData = this.getAllClasswork[this.index];
  }
  submitWorkModel() {
    this.submitWorkForm = this.fb.group({
      comment: [null, Validators.required],
      file: [null, Validators.required],
    });
  }

  download(attachment, filename) {
    this.downloadFile = "data:application/pdf;base64," + attachment;
    // console.log('data');
    // console.log(this.downloadFile);
    const downloadLink = document.createElement("a");
    const fileName = filename;
    if (filename === 'None' || fileName === null || filename === undefined) {
      this.toastr.warning('No File Was Uploaded', 'Empty File', { timeOut: 5000 })

    } else {
      downloadLink.href = this.downloadFile;
      downloadLink.download = fileName;
      downloadLink.click();
    }

  }

  onFileChange(event) {
    var files = event.target.files;
    var file = files[0];
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

    const payload = {
      token: this.userData.token,
      classworkID: this.workData.classworkID,
      messageAnswer: this.submitWorkForm.value.comment,
      attachment: this.submitWorkForm.value.file,
      attachmentFilename: this.fileName
    }

    this.apiService.submitClasswork(payload)
      .subscribe((response: any) => {
        const { status, body } = response;
        if (status === 201 || status === 200) {
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
        if (status === 403) {
          this.toastr.error(message, 'Error', { timeOut: 5000 })
          this.showSpinner = false;
        }
      })
  }

  updateClassWork(classID, userID) {
    const { token } = userID;
    const { rid } = classID;
    console.log(rid)
    console.log(token)
    this.apiService.getClassworkStudent(rid, token)
      .subscribe((response: any) => {
        this.isNull = false;
        console.log('compiled')
        const { classworks } = response.body;
        this.classWork = classworks;
        this.restoreClassWork(this.classWork);
      }, (error: any) => {
        console.log(error)
        const { message, status } = error.error;
        this.error = true;
        if (status === 404) {
          this.errorMessage = 'Empty Classwork';
        } else if (status === 500) {
          this.errorMessage = 'Something went wrong, please try again';
        }
      })
  }

  restoreClassWork(data) {
    this.workDetails.setClassWork(data);
    this.workDetails.index.subscribe((index: any) => {
      this.workData = data[index];
    })
  }

}
