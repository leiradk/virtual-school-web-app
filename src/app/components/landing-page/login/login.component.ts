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
    private system: SystemUtils
  ) {
    this.signInModel();
  }


  ngOnInit(): void { }
  signInModel() {
    this.signInForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  onSubmit() {
    console.log(this.signInForm.value);
    const { value } = this.signInForm;
    this.loading = true;
    this.apiHost.signin(value).subscribe((response: any) => {
      console.log(response);
      if (response) {
        const { status, body } = response;
        if (status === 200) {
          const { data } = body;
          console.log(data);

          if (parseInt(data.usertype) === 10002) {
            this.system.storeLocal('userData', body);
            this.router.navigate(["/teacher"]);
          } else if (parseInt(data.usertype) === 10001) {
            console.log(data);
            this.system.storeLocal('userData', body);
            this.router.navigate(["/dashboard"]);
          } else if (parseInt(data.usertype) === 10003) {
            console.log(data);
            this.system.storeLocal('userData', body);
            this.router.navigate(["/student"]);
          } else {
            console.log('failed')
          }

        } else {
          this.loading = false;
        }
      } else {
        this.loading = false;
      }
    });
  }
}
