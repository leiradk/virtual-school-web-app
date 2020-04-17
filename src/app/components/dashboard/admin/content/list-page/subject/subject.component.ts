import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-subject",
  templateUrl: "./subject.component.html",
  styleUrls: ["./subject.component.scss"],
})
export class SubjectComponent implements OnInit {
  public addStudentForm: FormGroup;
    searchText;
    public people: any;
    p: number = 1;
    viewList: number = 5;
  
    constructor(
      private fb: FormBuilder,
      private toastr: ToastrService
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
      // setTimeout(() => {
      //   this.showSuccess();
      // }, 1000);
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
    get email() {
      return this.addStudentForm.get('email') as FormControl;
    } 
    get firstname() {
      return this.addStudentForm.get('firstname') as FormControl;
    }
    get middlename() {
      return this.addStudentForm.get('middlename') as FormControl;
    }
    get lastname() {
      return this.addStudentForm.get('lastname') as FormControl;
    }
    get password() {
      return this.addStudentForm.get('password') as FormControl;
    }
    get repassword() {
      return this.addStudentForm.get('repassword') as FormControl;
    }
  }
  