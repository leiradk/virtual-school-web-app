import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { ApiHostService } from "../../../../../../services/api-host.service";
import { SystemUtils } from "../../../../../../services/system.utils";
import { AdminListDataService } from "../../../../../../services/admin-list-data.service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

declare var jQuery: any;

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss", "../../../../../../../assets/staff_teacher/css/styles.min.css"],
})
export class StudentsComponent implements OnInit {

  public addStudentForm: FormGroup;
  public people: any = [];
  p: number = 1;
  searchText;
  viewList: number = 5;
  userData: any;
  error: boolean = false;


  teacherParams: Observable<string>;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private apiService: ApiHostService,
    private system: SystemUtils,
    private router: Router,
    private adminList: AdminListDataService
  ) {
    this.studentFormModel();
  }

  showSpinner: boolean = true;

  ngOnInit(): void {
    this.userData = this.system.retrieveItem("userData");
    this.getStudents();
    // this.mockData();
  }

  getStudents() {
    const { token } = this.userData;
    this.apiService.getStudents(token)
      .subscribe((response: any) => {
        const { status, body } = response;
        if (status === 200) {
          this.people = body;
          this.showSpinner = false;
        }
      }, (error: any) => {
        const { message } = error.error;
        setTimeout(() => { this.showFailed(message); }, 1000); //add toast message

        this.showSpinner = false;
        this.error = true;
      });
  }

  // get email() {
  //   return this.addStudentForm.get('email') as FormControl;
  // }
  // get firstname() {
  //   return this.addStudentForm.get('firstname') as FormControl;
  // }
  // get middlename() {
  //   return this.addStudentForm.get('middlename') as FormControl;
  // }
  // get lastname() {
  //   return this.addStudentForm.get('lastname') as FormControl;
  // }
  get username() {
    return this.addStudentForm.get("username") as FormControl;
  }
  get yearlevel() {
    return this.addStudentForm.get("yearlevel") as FormControl;
  }
  // get department() {
  //   return this.addStudentForm.get("department") as FormControl;
  // }
  get password() {
    return this.addStudentForm.get("password") as FormControl;
  }
  get repassword() {
    return this.addStudentForm.get("repassword") as FormControl;
  }

  studentFormModel() {
    this.addStudentForm = this.fb.group({
      // email: [null, [Validators.required, Validators.email]],
      // firstname: [null, Validators.required],
      // middlename: [null, Validators.required],
      // lastname: [null, Validators.required],
      username: [null, Validators.required],
      yearlevel: [null, Validators.required],
      // department: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]],
      repassword: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  showSuccess() {
    this.toastr.success('Student Added successfully. Reloading List.', 'Congratulations', { timeOut: 5000 })
  }
  showFailed(message) {
    this.toastr.warning(message, 'Warning', { timeOut: 5000 })
  }

  //adding student details on 
  onSubmit() {
    this.error = false;
    const { value } = this.addStudentForm;
    const data = {
      username: value.username,
      yearLevel: value.yearlevel,
      password: value.password,
    };

    // get chckbox status
    let contModal = <HTMLInputElement>document.getElementById('continueModal');
    if (!contModal.checked) {
      jQuery('#myModal').modal('hide'); //close modal after submit
    }

    this.showSpinner = true;

    this.apiService.addStudent(data)
      .subscribe((response: any) => {
        setTimeout(() => { this.showSuccess(); }, 1000); //add toast message
        this.addStudentForm.reset(); //reset form
        const { status } = response;
        if (status === 201) {
          this.ngOnInit();
          this.error = false;

        } else {
        }
      }, (error: any) => {
        const { message } = error.error;
        this.addStudentForm.reset(); //reset form
        setTimeout(() => { this.showFailed(message); }, 1000); //add toast message
        this.error = true;
      });
  }

  //Pull from archive and add to archive hihi

  data: any = [];
  getUsername: any;
  getType: any;


  //teacher variables
  teacherData: any = [];
  teacherError: boolean = false;
  refreshTeacher: boolean = false;
  teacherSearchText: any;
  public teacherShowSearch: boolean = false;

  getUsernameData(user, type) {
    this.getUsername = user;
    this.getType = type
  }

  pullFromArchive() {
    const { token } = this.data;
    const payload = {
      token: token,
      username: this.getUsername,
      action: 'active'
    }
    this.showSpinner = true;

    this.apiService.pullFromArchive(payload)
      .subscribe((response: any) => {
        console.log(response);
        this.getStudents();
        this.adminList.setInactiveStudent(null);
        this.adminList.setAllTeachers(null);
        this.adminList.setTeacher(null);
        // this.teacherParams.pipe(take(1)).subscribe({
        //   next: (post) => {
        //     console.log('observable data', post);
        //   },
        //   error: err => {
        //     console.log(err)

        //   },
        //   complete: () => {

        //   },
        // });
      }, (error: any) => {
        console.log(error);
      })

  }

  addToArchive() {
    const { token } = this.data;

    const payload = {
      token: token,
      username: this.getUsername,
      action: 'inactive'
    }
    this.showSpinner = true;
    this.apiService.addToArchive(payload)
      .subscribe((response: any) => {
        console.log(response);
        this.adminList.setInactiveTeacher(null);
        this.adminList.setTeacher(null);
        this.adminList.setAllTeachers(null);
        this.getStudents();
      }, (error: any) => {
        console.log(error);
      })
  }
}
