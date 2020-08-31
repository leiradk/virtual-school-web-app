import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl,
} from "@angular/forms";
import { ApiHostService } from "../../../../../../../services/api-host.service";
import { ToastrService } from "ngx-toastr";
import { SystemUtils } from '../../../../../../../services/system.utils';
import { Router } from "@angular/router";
@Component({
  selector: 'app-lesson-plan',
  templateUrl: './lesson-plan.component.html',
  styleUrls: ['./lesson-plan.component.scss']
})
export class LessonPlanComponent implements OnInit {
  selectedSubject: any;
  selectedGrade: any;
  hide: boolean = false;
  loadingModules: boolean = false;
  public addModuleForm: FormGroup;
  public searchModuleForm: FormGroup;
  lessonPlan: any;
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  fileName: any;
  base64textString: any;
  userData: any;
  search: any
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

  
  showSuccess() {
    this.toastr.success('Item Added successfully. Reloading List.', 'Congratulations', { timeOut: 5000 })
  }

  showFailed() {
    this.toastr.warning("Error", 'Warning', { timeOut: 5000 })
  }


  ngOnInit(): void {
    this.userData = this.system.retrieveItem('userData');
    this.getLessonPlan();
  }

  getLessonPlan() {
    this.loadingModules = true
    this.apiService.getLessonPlanTeacher(this.userData.token)
      .subscribe((response: any) => {
        console.log(response)
        this.loadingModules = false
        this.lessonPlan = response.body.lessonPlans
      }, (error: any) => {
        this.loadingModules = false
        console.log(error)
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

  onSubmit(value) {
    const payload = {
      token: this.userData.token,
      title: this.addModuleForm.value.title,
      subject: this.addModuleForm.value.subject,
      grade: this.addModuleForm.value.grade,
      file: this.base64textString,
      filename: this.fileName
    }
    this.loadingModules = true
    this.apiService.addLessonPlan(payload)
      .subscribe((response: any) => {
        this.loadingModules = false
        console.log(response)
        setTimeout(() => { this.showSuccess(); }, 1000); //add toast message
      }, (error: any) => {
        this.loadingModules = false
        setTimeout(() => { this.showFailed(); }, 1000); //add toast message
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
}
