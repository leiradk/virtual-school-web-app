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
@Component({
  selector: 'app-add-classwork',
  templateUrl: './add-classwork.component.html',
  styleUrls: ['./add-classwork.component.scss']
})
export class AddClassworkComponent implements OnInit {
  public addClassWorkForm: FormGroup;
  base64textString: any;
  fileName: any;
  classDetails: any;
  userData: any;
  constructor(
    private apiService: ApiHostService,
    private fb: FormBuilder,
    private system: SystemUtils,
    private toastr: ToastrService,
    private details: AssignDetailsComponent,
  ) { this.workFormModel(); }

  ngOnInit(): void {
    this.classDetails = this.system.retrieveItem('classDetails');
    this.userData = this.system.retrieveItem('userData');

  }

  get workTitle() {
    return this.addClassWorkForm.get("workTitle") as FormControl;
  }
  get description() {
    return this.addClassWorkForm.get("description") as FormControl;
  }
  get points() {
    return this.addClassWorkForm.get("points") as FormControl;
  }
  get instruction() {
    return this.addClassWorkForm.get("instruction") as FormControl;
  }
  get dueDate() {
    return this.addClassWorkForm.get("dueDate") as FormControl;
  }
  workFormModel() {
    this.addClassWorkForm = this.fb.group({
      workTitle: [null, Validators.required],
      description: [null, Validators.required],
      points: [null, Validators.required],
      instruction: [null, Validators.required],
      dueDate: [null, Validators.required],
      // workFile: [null, Validators.required]
    });
  }


  onSubmit() {

    const date = this.addClassWorkForm.value.dueDate.year + "-" + this.addClassWorkForm.value.dueDate.month + "-" + this.addClassWorkForm.value.dueDate.day;
    const payload = {
      token: this.userData.token,
      title: this.addClassWorkForm.value.workTitle,
      classID: this.classDetails.rid,
      instruction: this.addClassWorkForm.value.instruction,
      points: this.addClassWorkForm.value.points,
      dueDate: date,
      attachment: this.base64textString,
      attachmentFilename: this.fileName
    }
    console.log(payload);

    this.apiService.addClasswork(payload)
      .subscribe((response: any) => {
        console.log(response);
        this.addClassWorkForm.reset();
        this.details.closeModal();
      }, (error: any) => {
        console.log(error);
      })
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
