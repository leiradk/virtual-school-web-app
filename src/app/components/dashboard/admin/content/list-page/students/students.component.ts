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

declare var jQuery: any;

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"],
})
export class StudentsComponent implements OnInit {

  public addStudentForm: FormGroup;
  public people: any = [];
  p: number = 1;
  searchText;
  viewList: number = 5;
  userData: any;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private apiService: ApiHostService,
    private system: SystemUtils
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
    this.apiService.getStudents(token).subscribe((response: any) => {
      const { status, body } = response;
      console.log(body);
      if (status === 200) {
        this.people = body;
        this.showSpinner = false;
      }
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
  get position() {
    return this.addStudentForm.get("position") as FormControl;
  }
  get department() {
    return this.addStudentForm.get("department") as FormControl;
  }
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
      position: [null, Validators.required],
      department: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]],
      repassword: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  showSuccess() {
    this.toastr.success('Student Added successfully', 'Congratulations', { timeOut: 2000 });
  }

  onSubmit() {
    console.log('Im here student add');
    console.log(this.addStudentForm);
    const { value } = this.addStudentForm;

    const data = {
  
      username: value.username,
      position: value.position,
      department: value.department,
      password: value.password,
    };

console.log(data);
    // get chckbox status
    let contModal = <HTMLInputElement>document.getElementById('continueModal');
    if (!contModal.checked) {
      jQuery('#myModal').modal('hide'); //close modal after submit
    }

    setTimeout(() => { this.showSuccess(); }, 500); //add toast message
    this.addStudentForm.reset(); //reset form
    this.getStudents(); //reload table data

    this.apiService.addStudent(data).subscribe((response: any) => {
      const { status } = response;
      if (status === 201) {
        console.log("response");
      } else {
        console.log("failed to add");
        console.log(response);
      }
    });
    this.people.push(data);
  }

  mockData() {
    this.people = [
      {
        email: "sample@gmail.com",
        name: "Tiger",
        status: "Student",
      },
    ];
  }
}
