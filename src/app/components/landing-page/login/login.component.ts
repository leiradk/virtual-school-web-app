import { Component, OnInit } from "@angular/core";
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
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})

export class LoginComponent implements OnInit {
  public signInForm: FormGroup;
  loading = false;
  constructor(
    private apiHost: ApiHostService,
    private fb: FormBuilder,
    private router: Router,
    private system: SystemUtils,
    private sharedWork: SharedWorkDetailsService,
    private toastr: ToastrService
  ) {
    this.signInModel();
  }


  ngOnInit(): void {
   // this.loggout();
  }
  signInModel() {
    this.signInForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  showFailed(message) {
    this.toastr.warning(message, 'Warning', { timeOut: 5000 })
  }

  // login the user if fields are correct
  onSubmit() {
    const { value } = this.signInForm;
    this.loading = true;
    this.apiHost.signin(value).subscribe((response: any) => {
      console.log(response)
      if (response) {
        const { status, body } = response;
        if (status === 200) {
          const { data } = body;
          this.system.storeLocal('username', value.username);
          console.log(value)

          if (parseInt(data.usertype) === 10002) {
            this.system.storeLocal('userData', body);
            this.router.navigate(["/user/t"]);
          } else if (parseInt(data.usertype) === 10001) {
            this.system.storeLocal('userData', body);
            this.router.navigate(["/dashboard"]);

          } else if (parseInt(data.usertype) === 10003) {
            this.system.storeLocal('userData', body);
            this.router.navigate(["/user/s"]);
            this.loading = false;

          } else if (parseInt(data.usertype) === 10004) {
            this.system.storeLocal('userData', body);
            // const message = "Please Update your password";
            // this.router.navigate(["verify/update-password"]);
            if (data.isVerified === false && data.isChange === false && data.isChecked === false) {
              const message = "Please Update your password";
              this.router.navigate(["verify/update-password"]);
              setTimeout(() => { this.showFailed(message); }, 1000); //add toast message
              this.loading = false;
            } else if (data.isVerified === false && data.isChange === true && data.isChecked === false) {
              const message = "Please Update your profile";
              this.router.navigate(["verify/update-profile"]);
              setTimeout(() => { this.showFailed(message); }, 1000); //add toast message
            } else if (data.isVerified === false && data.isChange === true && data.isChecked === true) {
              // const message = "Please Update your profile";
              this.router.navigate(["user/p/main"]);
              // setTimeout(() => { this.showFailed(message); }, 1000);
               //add toast message
            } else {
              this.router.navigate(["/user/p"]);
              this.loading = false;
            }
          } else {
            console.log('failed')
            this.loading = false;
          }

        } else {
          this.loading = false;
        }
      } else {
        this.loading = false;
      }
    }, (error: any) => {
      const { message } = error.error;
      console.log(error)
      setTimeout(() => { this.showFailed(message); }, 1000); //add toast message
      this.loading = false;
    });
  }
  loggout() {
    console.log('login')
    this.sharedWork.setClassWork(null);
    this.sharedWork.setClassWork(null);
    this.system.deleteKey('workList');
    this.system.deleteKey('workDetails');
    this.system.deleteKey('userData');
  }
}
