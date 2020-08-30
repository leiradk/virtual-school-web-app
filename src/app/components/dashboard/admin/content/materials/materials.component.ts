import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { ApiHostService } from "../../../../../services/api-host.service";
import { ToastrService } from "ngx-toastr";
import { SystemUtils } from '../../../../../services/system.utils';
import { Router } from "@angular/router";
@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {
  selectedSubject: any;
  selectedGrade: any;
  hide: boolean = false;
  public addModuleForm: FormGroup;
  fileName: any;
  base64textString: any;
  userData: any;
  modules: any;
  downloadFile: any;
  gradeLevel = [
    { id: 1, name: 'Grade 1' },
    { id: 2, name: 'Grade 2' },
    { id: 3, name: 'Grade 3' },
    { id: 4, name: 'Grade 4' },
    { id: 5, name: 'Grade 5' },
    { id: 6, name: 'Grade 6' },
    { id: 7, name: 'Grade 7' },
    { id: 8, name: 'Grade 8' },
    { id: 9, name: 'Grade 9' },
    { id: 10, name: 'Grade 10' },
    { id: 11, name: 'Grade 11' },
    { id: 12, name: 'Grade 12' },
  ];

  subjects = [
    { id: 1, subject: 'English' },
    { id: 2, subject: 'Mathematics' },
    { id: 3, subject: 'Science' },
    { id: 4, subject: 'Physical Education' },
    { id: 5, subject: 'History' },
  ];

  constructor(
    private fb: FormBuilder,
    private apiService: ApiHostService,
    private toastr: ToastrService,
    private system: SystemUtils,
    private router: Router,
  ) {
    this.addModuleFields();
  }

  ngOnInit(): void {
    this.userData = this.system.retrieveItem('userData');
    this.getModule();
  }

  getModule() {
    this.apiService.getModule(this.userData.token)
      .subscribe((response: any) => {
        console.log(response)
        this.modules = response.body.modules;
      }, (error: any) => {
        console.log(error)
      })
  }
  addModuleFields() {
    this.addModuleForm = this.fb.group({

      moduleName: [null, Validators.required],
      moduleNumber: [null, Validators.required],
      grade: [null, Validators.required],
      fileName: [null, [Validators.required, Validators.minLength(6)]],
      dateCreated: [null, [Validators.required, Validators.minLength(6)]],
    }, {
    });
  }

  onSubmit(value) {
    console.log(value)
    const payload = {
      token: this.userData.token,
      moduleName: this.addModuleForm.value.moduleName,
      moduleNumber: this.addModuleForm.value.moduleNumber,
      grade: this.addModuleForm.value.grade,
      dateCreated: this.addModuleForm.value.dateCreated,
      fileb64: this.base64textString,
      filename: this.fileName
    }
    console.log(payload)
    this.apiService.addModule(payload)
      .subscribe((response: any) => {
        console.log(response)
      }, (error: any) => {
        console.log(error)
      })
  }

  upload(file) {
    this.fileName = file[0].name
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
    this.base64textString = btoa(binaryString);
  }

  dateCreated(date){
    const splitDate = date.split(' ');
    return splitDate[0];
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
}
