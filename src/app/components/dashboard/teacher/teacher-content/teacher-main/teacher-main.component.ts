import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { ApiHostService } from '../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../services/system.utils';
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
    private system: SystemUtils
  ) {
    this.classFormModel();
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
    console.log('dadsadsad');

    const { value } = this.addClassFOrm;
    const payload = {
      token: this.userData.token,
      className: value.name,
      classSubject: value.subjectname,
      classGradeLevel: value.gradelevel
    }

      this.apiService.addClass(payload)
        .subscribe((response: any) => {
          const { status } = response;
          if(status === 201 ) {
            console.log('success')
          } else {
            console.log(response);
          }
        });
    console.log(payload);
  }

  getClassroom(data) {
    const { token } = data;
    this.apiService.getClassroom(token)
      .subscribe((response: any) => {
        console.log(response);
        const { status, message, body } = response;
        if(status === 200) {
          this.classDetails = body;
          // console.log(body[0].classCreated.split(' ')[0].split('-'));
          const date = body[0].classCreated.split(' ')[0].split('-');
          console.log(date);
          console.log(this.getDate(parseInt(date[1])));
          this.month = this.getDate(parseInt(date[1]));
          this.day = date[2];
          this.year = date[0];
        }
      });
  }

  getDate(month) {
    if(month === 1) {
      return 'January';
    } else if( month === 2){
      return 'February'
    } else if( month === 3){
      return 'March'
    }else if( month === 4){
      return 'April'
    }else if( month === 5){
      return 'May'
    }else if( month === 6){
      return 'June'
    }else if( month === 7){
      return 'July'
    }else if( month === 8){
      return 'August'
    }else if( month === 9){
      return 'September'
    }else if( month === 10){
      return 'October'
    }else if( month === 11){
      return 'November'
    }else if( month === 12){
      return 'December'
    }
  }
}
