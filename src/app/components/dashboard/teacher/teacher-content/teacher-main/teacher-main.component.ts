import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { ApiHostService } from '../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../services/system.utils';
import { ToastrService } from "ngx-toastr";


declare var jQuery: any;

@Component({
  selector: 'app-teacher-main',
  templateUrl: './teacher-main.component.html',
  styleUrls: ['./teacher-main.component.scss']
})

export class TeacherMainComponent implements OnInit {
  public addClassFOrm: FormGroup;
  userData: any;
  classDetails: any;
  month: any;
  day: any;
  year: any;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiHostService,
    private system: SystemUtils,
    private toastr: ToastrService,
  ) {
    this.classFormModel();
  }

  showSpinner: boolean = true;

  showSuccess() {
    this.toastr.success('Class has been added successfully. Reloading data. Please wait.', 'Congratulations', { timeOut: 5000 })
  }

  ngOnInit(): void {
    this.userData = this.system.retrieveItem('userData');
    this.getClassroom(this.userData);
  }

  get name() {
    return this.addClassFOrm.get("name") as FormControl;
  }
  get subjectname() {
    return this.addClassFOrm.get("subjectname") as FormControl;
  }
  get gradelevel() {
    return this.addClassFOrm.get("gradelevel") as FormControl;
  }

  classFormModel() {
    this.addClassFOrm = this.fb.group({
      name: [null, Validators.required],
      subjectname: [null, Validators.required],
      gradelevel: [null, Validators.required],

    });
  }

  viewDetails(data) {
    console.log(data)
    this.system.storeLocal('classDetails', data);
  }

  onSubmit() {
    const { value } = this.addClassFOrm;
    const payload = {
      token: this.userData.token,
      className: value.name,
      classSubject: value.subjectname,
      classGradeLevel: value.gradelevel
    }

    
    jQuery('#myModal').modal('hide'); //close modal after submit

    this.showSpinner = true;

    setTimeout(() => { this.showSuccess(); }, 1000); //add toast message
    this.addClassFOrm.reset(); //reset form

    this.apiService.addClass(payload).subscribe((response: any) => {
        const { status } = response;
        if (status === 201) {
          console.log('success')
          this.ngOnInit();
        } else {
          console.log(response);
        }
      });
    console.log(payload);
  }

  getClassroom(data) {
    const { token } = data;
    this.apiService.getClassroom(token).subscribe((response: any) => {
        const { status, message, body } = response;
        console.log(response);
        this.classDetails = body;
        if (status === 200) {
          // console.log(body[0].classCreated.split(' ')[0].split('-'));
          const date = body[0].classCreated.split(' ')[0].split('-');
          console.log(date);
          console.log(this.getDate(parseInt(date[1])));
          this.month = this.getDate(parseInt(date[1]));
          this.day = date[2];
          this.year = date[0];
          this.showSpinner = false;
        }
      });
  }

  getDate(month) {
    if (month === 1) {
      return 'January';
    } else if (month === 2) {
      return 'February'
    } else if (month === 3) {
      return 'March'
    } else if (month === 4) {
      return 'April'
    } else if (month === 5) {
      return 'May'
    } else if (month === 6) {
      return 'June'
    } else if (month === 7) {
      return 'July'
    } else if (month === 8) {
      return 'August'
    } else if (month === 9) {
      return 'September'
    } else if (month === 10) {
      return 'October'
    } else if (month === 11) {
      return 'November'
    } else if (month === 12) {
      return 'December'
    }
  }
}
