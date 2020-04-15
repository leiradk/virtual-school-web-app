import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
@Component({
  selector: "app-teacher-staff",
  templateUrl: "./teacher-staff.component.html",
  styleUrls: ["./teacher-staff.component.scss"],
})
export class TeacherStaffComponent implements OnInit {
  public addStaffFOrm: FormGroup;

  searchText;
  public people: any;
  p: number = 1;
  viewList: number = 5;

  constructor(
    private fb: FormBuilder
  ) { 
    this.studentFormModel();
  }

  ngOnInit(): void {
    this.mockData();
  }


  mockData() {
    this.people = [
      {
        email: "sample@gmail.com",
        name: "Tiger",
        position: "Teacher AID II",
        department: "ICSD"

      },

    ];
  }

  onSubmit() {
    const {value} = this.addStaffFOrm;
    console.log(value);
  }
  studentFormModel() {
    this.addStaffFOrm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      firstname: [null, Validators.required],
      middlename: [null, Validators.required],
      lastname: [null, Validators.required],
      position: [null, Validators.required],
      department: [null, Validators.required],
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]],
      repassword: [null, [Validators.required, Validators.minLength(6)]],
    });
  }


  get email() {
    return this.addStaffFOrm.get('email') as FormControl;
  }
  get firstname() {
    return this.addStaffFOrm.get('firstname') as FormControl;
  }
  get middlename() {
    return this.addStaffFOrm.get('middlename') as FormControl;
  }
  get lastname() {
    return this.addStaffFOrm.get('lastname') as FormControl;
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
