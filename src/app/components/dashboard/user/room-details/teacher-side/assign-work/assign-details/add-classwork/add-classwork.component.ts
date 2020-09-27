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


  showSpinnerLoad: boolean = false;

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
    const date = this.addClassWorkForm.value.dueDate.toString().split(" ")

   // const date = this.addClassWorkForm.value.dueDate.year + "-" + this.addClassWorkForm.value.dueDate.month + "-" + this.addClassWorkForm.value.dueDate.day;
    const payload = {
      token: this.userData.token,
      title: this.addClassWorkForm.value.workTitle,
      classID: this.classDetails.rid,
      instruction: this.addClassWorkForm.value.instruction,
      description: this.addClassWorkForm.value.description,
      points: this.addClassWorkForm.value.points,
      dueDate: this.getDueDate(date),
      attachment: this.base64textString,
      attachmentFilename: this.fileName
    }

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

  getDueDate(date: any) {
    console.log(date)
    let month;
    if(date[1] === 'Jan' ){
      month = "01";
    }  else if(date[1] === 'Feb') {
      month = "02";
    } else if(date[1] === 'Mar') {
      month = "03";
    } else if(date[1] === 'Apr') {
      month = "04";     
    } else if(date[1] === 'May') {
      month = "05";
    } else if(date[1] === 'Jun') {
      month = "06";
    } else if(date[1] === 'Jul') {
      month = "07";
    } else if(date[1] === 'Aug') {
      month = "08";
    } else if(date[1] === 'Sep') {
      month = "09";
    } else if(date[1] === 'Oct') {
      month = "10"; 
    } else if(date[1] === 'Nov') {
      month = "11";
    } else if(date[1] === 'Dec') {
      month = "12";
    }
    const fullDueDate = date[3]+"-"+month+"-"+date[2];
    return fullDueDate;
  }
}
