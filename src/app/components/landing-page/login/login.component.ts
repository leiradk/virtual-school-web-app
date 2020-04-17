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
  constructor(
    private apiHost: ApiHostService,
    private fb: FormBuilder,
    private router: Router,
    private system: SystemUtils
  ) {
    this.signInModel();
  }

  loading = false;

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

    this.apiHost.signin(value).subscribe((response: any) => {
      console.log(response);
      if (response) {
        const { status, body } = response;
        if (status === 200) {
          this.system.storeLocal('userData', body);
          this.router.navigate(["/dashboard"]);
        }
      }
    });
    this.loading = true;
  }
}
