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
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  public updateProfileForm: FormGroup;

  constructor(
    private apiHost: ApiHostService,
    private fb: FormBuilder,
    private router: Router,
    private system: SystemUtils,
    private sharedWork: SharedWorkDetailsService,
    private toastr: ToastrService
  ) { this.updateProfile() }

  ngOnInit(): void {
  }
  updateProfile() {
    this.updateProfileForm = this.fb.group({
      firstname: [null, Validators.required],
      middlename: [null, Validators.required],
      lastname: [null, Validators.required],
      address: [null, Validators.required],
      occupation: [null, Validators.required],
      phone: [null, Validators.required],
    });
  }
  onSubmit() {
    console.log(this.updateProfileForm)
  }
}
