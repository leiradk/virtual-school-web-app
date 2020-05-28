import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { ApiHostService } from "../../../../../../services/api-host.service";
import { ToastrService } from "ngx-toastr";
import { SystemUtils } from '../../../../../../services/system.utils';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AdminListDataService } from "../../../../../../services/admin-list-data.service";

declare var jQuery: any;

@Component({
  selector: "app-teacher-staff",
  templateUrl: "./teacher-staff.component.html",
  styleUrls: ["./teacher-staff.component.scss", "../../../../../../../assets/staff_teacher/css/styles.min.css"],
})
export class TeacherStaffComponent implements OnInit {
  public addStaffFOrm: FormGroup;

  searchText;
  public people: any = [];
  p: number = 1;
  viewList: number = 5;
  userData: any;
  error: boolean = false;
  teacherParams: Observable<string>;
  teacherMessage: any;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiHostService,
    private toastr: ToastrService,
    private system: SystemUtils,
    private adminList: AdminListDataService
  ) {
    this.studentFormModel();

  }

  showSpinner: boolean = true;

  ngOnInit(): void {
    // this.mockData();
    this.userData = this.system.retrieveItem('userData');
    this.teacherParams = this.adminList.allTeacher;
    this.checkTeacherList();
  }

  checkTeacherList() {
    this.teacherParams.pipe(take(1)).subscribe({
      next: (post) => {
        console.log(post);
        if (post === null || post === undefined) {
          this.getTeacher();
        } else {
          this.showSpinner = false;
          this.error = false;
          this.people = post;
        }
      },
      error: err => {
        console.log(err)

      },
      complete: () => {

      },
    });
  }
  //get data list for teacher and staff
  getTeacher() {
    const { token } = this.userData;
    this.apiService.getTeacher(token)
      .subscribe((response: any) => {
        this.error = false;
        const { status, body } = response;
        if (status === 200) {
          console.log(body);
          this.people = body;
          this.adminList.setAllTeachers(this.people);
          this.showSpinner = false;
        }
      }, (error: any) => {
        const { status, message } = error.error;
        setTimeout(() => { this.showFailed(message); }, 1000); //add toast message
        this.addStaffFOrm.reset(); //reset form
        this.showSpinner = false;
        this.error = true;
        if (status === 500) {
          this.teacherMessage = "Ops. Something went wrong, Please try again"
        } else if (status === 401) {
          this.teacherMessage = "Unauthorized Access of Data"
        } else if (status === 404) {
          this.teacherMessage = "Opps! Looks like this list is empty."
        } else {
          this.teacherMessage = "Ops. Something went wrong, Please try again"
        }

      })
  }

  showSuccess() {
    this.toastr.success('Teacher Added successfully. Reloading List.', 'Congratulations', { timeOut: 5000 })
  }

  showFailed(message) {
    this.toastr.warning(message, 'Warning', { timeOut: 5000 })
  }



  //adding teacher and staff
  onSubmit() {
    this.error = false;
    const { value } = this.addStaffFOrm;
    const data = {
      username: value.username,
      password: value.password,
      position: value.position,
      department: value.department
    }

    // get chckbox status
    let contModal = <HTMLInputElement>document.getElementById('continueModal');
    if (!contModal.checked) {
      jQuery('#myModal').modal('hide'); //close modal after submit
    }

    this.showSpinner = true;


    // ------>  Please check the code below. I want to put the top code snippet inside if(status === 200)
    // adds a teacher
    this.apiService.addTeacher(data)
      .subscribe((response: any) => {
        const { status } = response;
        if (status === 201) {
          //reload onInit
          setTimeout(() => { this.showSuccess(); }, 1000); //add toast message
          this.addStaffFOrm.reset(); //reset form
          this.ngOnInit();
        } else {
        }
      }, (error: any) => {
        const { message } = error.error;
        this.addStaffFOrm.reset(); //reset form
        setTimeout(() => { this.showFailed(message); }, 1000); //add toast message
      })
  }


  studentFormModel() {
    this.addStaffFOrm = this.fb.group({

      position: [null, Validators.required],
      department: [null, Validators.required],
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]],
      repassword: [null, [Validators.required, Validators.minLength(6)]],
    }, {
    });
  }

  dateCreated(date) {
    const splitData = date.split(' ');
    return splitData[0];
  }

  getStatus(status) {
    if (status === 'Active' || status === 'active') {
      return true;
    } else {
      return false;
    }
  }
  get position() {
    return this.addStaffFOrm.get('position') as FormControl;
  }
  get department() {
    return this.addStaffFOrm.get('department') as FormControl;
  }
  get username() {
    return this.addStaffFOrm.get('username') as FormControl;
  }
  get password() {
    return this.addStaffFOrm.get('password') as FormControl;
  }
  get repassword() {
    return this.addStaffFOrm.get('repassword') as FormControl;
  }
}
