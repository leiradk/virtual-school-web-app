import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"],
})
export class StudentsComponent implements OnInit {
  public addStudentForm: FormGroup;
  searchText;
  public people: any = [];
  p: number = 1;
  viewList: number = 5;

  constructor(
    private fb: FormBuilder,
  ) {
    this.studentFormModel();
  }

  ngOnInit(): void {

    this.mockData();
  }
  studentFormModel() {
    this.addStudentForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      firstname: [null, Validators.required],
      middlename: [null, Validators.required],
      lastname: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]],
      repassword: [null, [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit(){
    console.log(this.addStudentForm);
    const { value } = this.addStudentForm;

    const data = {
      email: value.email,
      name: `${value.firstname} ${value.middlename} ${value.lastname}`,
      status: 'student'
    }
    this.people.push(data);
  }
  mockData(){
    this.people = [
      {
        email: "sample@gmail.com",
        name: "Tiger",
        status: "Student",
   
      },
  
    ];
  }
  
}
