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
  }
  addStudent() {
    this.addStudentForm = this.fb.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, Validators.required],
    });
  }

  onSubmit() {
    console.log(this.addStudentForm)
  }
}
