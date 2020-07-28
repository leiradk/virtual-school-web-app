import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { ApiHostService } from "../../../../../../services/api-host.service";
import { SystemUtils } from '../../../../../../services/system.utils';


@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {
  public addStudentForm: FormGroup;
  userData: any;
  constructor(
    private fb: FormBuilder,
    private apiHost: ApiHostService,
    private system: SystemUtils,
  ) {
    this.addStudent()
  }

  ngOnInit(): void {
    this.userData = this.system.retrieveItem('userData');

  }

  addStudent() {
    this.addStudentForm = this.fb.group({
      firstname: [null, Validators.required],
      middlename: [null, Validators.required],
      lastname: [null, Validators.required],
      gender: [null, Validators.required],
      email: [null, Validators.required],
      gradeLevel: [null, Validators.required],
    });
  }



  onSubmit() {
    const { token } = this.userData
    const payload = {
      token: token,
      email: this.addStudentForm.value.email,
      firstname: this.addStudentForm.value.firstname,
      middlename: this.addStudentForm.value.middlename,
      lastname: this.addStudentForm.value.lastname,
      yearLevel: this.addStudentForm.value.gradeLevel,
      gender: this.addStudentForm.value.gender
    }
    console.log(payload)
    this.apiHost.addMyStudent(payload)
      .subscribe((response: any) => {
        console.log(response)
        // this.router.navigate(['user/p']);
      }, (error: any) => {
        console.log(error)
      })

  }

}
