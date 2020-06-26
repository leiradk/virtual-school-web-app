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
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {
  public updatePasswordForm: FormGroup;
  constructor(
    private apiHost: ApiHostService,
    private fb: FormBuilder,
    private router: Router,
    private system: SystemUtils,
    private sharedWork: SharedWorkDetailsService,
    private toastr: ToastrService
  ) {
    this.updatePassword();
  }

  ngOnInit(): void {
  }
  updatePassword() {
    this.updatePasswordForm = this.fb.group({
      verifyPassword: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  onSubmit() {
    console.log(this.updatePasswordForm)
  }
}
