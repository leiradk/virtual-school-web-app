import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { SystemUtils } from '../../../../../../../../services/system.utils';
import { ToastrService } from "ngx-toastr";
import { ApiHostService } from '../../../../../../../../services/api-host.service';
import { AssignDetailsComponent } from '../assign-details.component';
import { UpdateClassworkService } from '../../../../../../../../services/update-classwork.service';
@Component({
  selector: 'app-update-classwork',
  templateUrl: './update-classwork.component.html',
  styleUrls: ['./update-classwork.component.scss']
})
export class UpdateClassworkComponent implements OnInit {
  public updateClassWorkForm: FormGroup;
  base64textString: any;
  fileName: any;
  classDetails: any;
  userData: any;
  updatedClasswork: any;
  updateDate: any;
  changeDate: boolean = false;

  showSpinnerLoad: boolean = false;

  constructor(
    private apiService: ApiHostService,
    private fb: FormBuilder,
    private system: SystemUtils,
    private toastr: ToastrService,
    private details: AssignDetailsComponent,
    private updateCW: UpdateClassworkService
  ) {


  }

  ngOnInit(): void {
    this.classDetails = this.system.retrieveItem('classDetails');
    this.userData = this.system.retrieveItem('userData');
    this.workFormModel();
    this.updateCW.updateClasswork
      .subscribe((response: any) => {
        console.log('response', response);
        this.updatedClasswork = response
        console.log('updatedClasswork', this.updatedClasswork);
        if (this.updatedClasswork) {
          this.updateClassWorkForm.controls['workTitle'].setValue(this.updatedClasswork.title)
          this.updateClassWorkForm.controls['description'].setValue(this.updatedClasswork.description)
          this.updateClassWorkForm.controls['points'].setValue(this.updatedClasswork.points)
          this.updateClassWorkForm.controls['instruction'].setValue(this.updatedClasswork.instruction)
          this.fileName = this.updatedClasswork.attachmentFilename;

          const datetime = this.updatedClasswork.dueDate.split(' ');
          const date = new Date(datetime[0]).toISOString().substring(0, 10);
          console.log(date);
          this.updateDate = date.toString();
          console.log(this.updateDate);
          this.updateClassWorkForm.controls['dueDate'].setValue(date);
        }
        // this.updateClassWorkForm.value.workTitle = response.title;
      })
  }
  updateDueDate() {
    this.changeDate = true;
  }
  get workTitle() {
    return this.updateClassWorkForm.get("workTitle") as FormControl;
  }
  get description() {
    return this.updateClassWorkForm.get("description") as FormControl;
  }
  get points() {
    return this.updateClassWorkForm.get("points") as FormControl;
  }
  get instruction() {
    return this.updateClassWorkForm.get("instruction") as FormControl;
  }
  get dueDate() {
    return this.updateClassWorkForm.get("dueDate") as FormControl;
  }
  workFormModel() {
    this.updateClassWorkForm = this.fb.group({
      workTitle: [null, Validators.required],
      description: [null, Validators.required],
      points: [null, Validators.required],
      instruction: [null, Validators.required],
      dueDate: ['2020-06-20', Validators.required],
      // workFile: [null, Validators.required]
    });
  }

  onSubmit() {

    const date = this.updateClassWorkForm.value.dueDate.year + "-" + this.updateClassWorkForm.value.dueDate.month + "-" + this.updateClassWorkForm.value.dueDate.day;
    const payload = {
      token: this.userData.token,
      title: this.updateClassWorkForm.value.workTitle,
      classID: this.classDetails.rid,
      classworkID: this.updatedClasswork.classworkID,
      instruction: this.updateClassWorkForm.value.instruction,
      points: this.updateClassWorkForm.value.points,
      dueDate: date,
      attachment: this.base64textString,
      attachmentFilename: this.fileName
    }


    this.showSpinnerLoad = true;
    console.log(payload);

    this.apiService.updateClassWork(payload)
      .subscribe((response: any) => {
        console.log(response);
        this.updateClassWorkForm.reset();
        this.details.closeModal();
      }, (error: any) => {
        console.log(error);
      })
  }

  onFileChange(event) {
    var files = event.target.files;
    var file = files[0];
    this.fileName = file.name;
    console.log(this.fileName);
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
