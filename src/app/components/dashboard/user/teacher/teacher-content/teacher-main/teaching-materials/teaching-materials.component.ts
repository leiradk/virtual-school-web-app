import { Component, OnInit } from '@angular/core';
import {
  FormGroup, FormBuilder, Validators, FormControl,
} from "@angular/forms";
import { ApiHostService } from "../../../../../../../services/api-host.service";
import { ToastrService } from "ngx-toastr";
import { SystemUtils } from '../../../../../../../services/system.utils';
import { Router } from "@angular/router";
@Component({
  selector: 'app-teaching-materials',
  templateUrl: './teaching-materials.component.html',
  styleUrls: ['./teaching-materials.component.scss']
})
export class TeachingMaterialsComponent implements OnInit {
  selectedSubject: any;
  selectedGrade: any;
  hide: boolean = false;
  loadingModules: boolean = false;
  public addModuleForm: FormGroup;
  fileName: any;
  base64textString: any;
  userData: any;
  search: any;
  teachingMaterials: any;
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

  showSuccess() {
    this.toastr.success('Item Added successfully. Reloading List.', 'Congratulations', { timeOut: 5000 })
  }

  showFailed() {
    this.toastr.warning("Error", 'Warning', { timeOut: 5000 })
  }

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
    this.userData = this.system.retrieveItem('userData');
    this.getModule();
  }

  getModule() {
    this.loadingModules = true
    this.apiService.getTeachingMaterialsTeacher(this.userData.token)
      .subscribe((response: any) => {
        this.teachingMaterials = response.body.materials
        this.loadingModules = false
      }, (error: any) => {
        console.log(error)
        this.loadingModules = false
      })
  }
  addModuleFields() {
    this.addModuleForm = this.fb.group({

      title: [null, Validators.required],
      subject: [null, Validators.required],
      grade: [null, Validators.required],
      fileName: [null, [Validators.required, Validators.minLength(6)]],
      // dateCreated: [null, [Validators.required, Validators.minLength(6)]],
    }, {
    });
  }

  onSubmit() {
    const payload = {
      token: this.userData.token,
      title: this.addModuleForm.value.title,
      subject: this.addModuleForm.value.subject,
      grade: this.addModuleForm.value.grade,
      file: this.base64textString,
      filename: this.fileName
    }
    this.loadingModules = true
    this.apiService.addTeachingMaterials(payload)
      .subscribe((response: any) => {
        console.log(response)
        this.loadingModules = false
        setTimeout(() => { this.showSuccess(); }, 1000); //add toast message
      }, (error: any) => {
        console.log(error)
        this.loadingModules = false
        setTimeout(() => { this.showFailed(); }, 1000); //add toast message
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
}
