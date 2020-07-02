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
  userData: any;
  matchPW: boolean = false;
  errorMessage: any;
  errorStatus: boolean = false;
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
    this.userData = this.system.retrieveItem('userData');
  }
  updatePassword() {
    this.updatePasswordForm = this.fb.group({
      verifyPassword: [null, Validators.required],
      oldpassword: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  onSubmit() {
    const { token } = this.userData;
    const password = this.updatePasswordForm.value.password;
    const verifyPassword = this.updatePasswordForm.value.verifyPassword;
    const oldpassword = this.updatePasswordForm.value.oldpassword;


    if (password === verifyPassword) {
      const payload = {
        token: token,
        password: password,
        oldpassword: oldpassword
      }
      console.log(payload)

      this.apiHost.updatePassword(payload)
        .subscribe((response: any) => {
          console.log(response)
          this.router.navigate(['verify/update-profile']);
        }, (error: any) => {
          console.log(error)

          this.errorStatus = true;
          this.errorMessage = 'Something Went Wrong';
          setTimeout(() => {
            this.errorStatus = false;
          }, 3000)
        })
    } else {
      this.matchPW = true;
      setTimeout(() => {
        this.matchPW = false;
      }, 3000)

    }

  }


}
