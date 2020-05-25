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

declare var jQuery: any;

@Component({
  selector: "app-teacher-staff",
  templateUrl: "./teacher-staff.component.html",
  styleUrls: ["./teacher-staff.component.scss", "../../../../../../../assets/staff_teacher/css/styles.min.css"],
})
export class TeacherStaffComponent implements OnInit {
  public addStaffFOrm: FormGroup;

  searchText;
  public people: any;
  p: number = 1;
  viewList: number = 5;
  userData: any;
  error: boolean = false;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiHostService,
    private toastr: ToastrService,
    private system: SystemUtils
  ) {
    this.studentFormModel();

  }

  showSpinner: boolean = true;

  ngOnInit(): void {
    // this.mockData();
    this.userData = this.system.retrieveItem('userData');
    this.getTeacher();
  }

  //get data list for teacher and staff
  getTeacher() {
    const { token } = this.userData;
    this.apiService.getTeacher(token)
      .subscribe((response: any) => {
        this.error = false;
        const { status, body } = response;
        if (status === 200) {
          this.people = body;
          this.showSpinner = false;
        }
      }, (error: any) => {
        const { message } = error.error;
        setTimeout(() => { this.showFailed(message); }, 1000); //add toast message
        this.addStaffFOrm.reset(); //reset form
        this.showSpinner = false;
        this.error = true;

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
      // email: [null, [Validators.required, Validators.email]],
      // firstname: [null, Validators.required],
      // middlename: [null, Validators.required],
      // lastname: [null, Validators.required],
      position: [null, Validators.required],
      department: [null, Validators.required],
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]],
      repassword: [null, [Validators.required, Validators.minLength(6)]],
    }, {
    });
  }


  // get email() {
  //   return this.addStaffFOrm.get('email') as FormControl;
  // }
  // get firstname() {
  //   return this.addStaffFOrm.get('firstname') as FormControl;
  // }
  // get middlename() {
  //   return this.addStaffFOrm.get('middlename') as FormControl;
  // }
  // get lastname() {
  //   return this.addStaffFOrm.get('lastname') as FormControl;
  // }
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
