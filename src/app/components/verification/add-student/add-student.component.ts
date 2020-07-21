import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { ApiHostService } from "../../../services/api-host.service";
import { Router } from "@angular/router";
import { SystemUtils } from '../../../services/system.utils';
import { SharedWorkDetailsService } from '../../../services/shared-work-details.service';
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  public addStudentForm: FormGroup;
  userData: any;
  constructor(
    private apiHost: ApiHostService,
    private fb: FormBuilder,
    private router: Router,
    private system: SystemUtils,
    private sharedWork: SharedWorkDetailsService,
    private toastr: ToastrService
  ) {
    this.addStudent();
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
        this.router.navigate(['user/p']);
      }, (error: any) => {
        console.log(error)
      })

  }
}
