import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { ApiHostService } from '../../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../../services/system.utils';
import { ToastrService } from "ngx-toastr";
import { SharedPostService } from "../../../../../../services/shared-post.service";
import { SharedWorkDetailsService } from "../../../../../../services/shared-work-details.service";

declare var jQuery: any;

@Component({
  selector: 'app-my-assigned-classes',
  templateUrl: './my-assigned-classes.component.html',
  styleUrls: ['./my-assigned-classes.component.scss']
})
export class MyAssignedClassesComponent implements OnInit {
  public addClassFOrm: FormGroup;
  userData: any;
  classDetails: any;
  month: any;
  day: any;
  year: any;
  errorData: boolean = false;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiHostService,
    private system: SystemUtils,
    private toastr: ToastrService,
    private sharedPost: SharedPostService,
    private sharedWork: SharedWorkDetailsService

  ) {
    this.classFormModel();
  }

  showSpinner: boolean = true;

  ngOnInit(): void {
    this.userData = this.system.retrieveItem('userData');
    this.getClassroom(this.userData);
    this.system.deleteKey('classDetails');
    this.deleteClassData();
  }

  showSuccess() {
    this.toastr.success('Class has been added successfully. Reloading data. Please wait.', 'Congratulations', { timeOut: 5000 })
  }
  showFailed() {
    this.toastr.error('Failed to add class. Please try again.', 'Failed', { timeOut: 5000 })
  }

  deleteClassData() {
    this.sharedPost.setRouteToken(null);
    this.sharedPost.setComments(null);
    this.sharedWork.setClassWork(null);
    this.sharedWork.setIndex(null);
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

  //storing class details on local storage as classDetails
  viewDetails(data) {
    this.system.storeLocal('classDetails', data);
    this.deleteClassData();
  }

  //submitting class details to add classroom

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

    this.addClassFOrm.reset(); //reset form

    this.apiService.addClass(payload)
      .subscribe((response: any) => {
        const { status } = response;
        if (status === 201) {
          setTimeout(() => { this.showSuccess(); }, 1000); //add toast message
          this.ngOnInit();
        } else {
        }
      }, (error: any) => {
        console.log(error);
        setTimeout(() => { this.showFailed(); }, 1000); //add toast message

      });
  }

  //get all classroom for a specific teacher
  getClassroom(data) {
    const { token } = data;
    this.apiService.getClassroom(token)
      .subscribe((response: any) => {
        const { status, message, body } = response;
        this.classDetails = body;
        this.errorData = false;
        if (status === 200) {
          // console.log(body[0].classCreated.split(' ')[0].split('-'));
          const date = body[0].classCreated.split(' ')[0].split('-');

          this.month = this.getDate(parseInt(date[1]));
          this.day = date[2];
          this.year = date[0];
          this.showSpinner = false;
        }
      }, (error: any) => {
        this.showSpinner = false;
        this.errorData = true;
      });
  }

  //get month
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
