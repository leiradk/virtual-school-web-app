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
  userData: any;
  getProfileData: boolean = false;

  showSpinner: boolean = false;


  constructor(
    private apiHost: ApiHostService,
    private fb: FormBuilder,
    private router: Router,
    private system: SystemUtils,
    private sharedWork: SharedWorkDetailsService,
    private toastr: ToastrService
  ) {
    //  this.updateProfile(); 
  }

  ngOnInit(): void {
    this.showSpinner = true;
    this.userData = this.system.retrieveItem('userData');
    this.getProfile();
  }
  // updateProfile() {


  //   this.updateProfileForm = this.fb.group({
  //     firstname: [null, Validators.required],
  //     middlename: [null, Validators.required],
  //     lastname: [null, Validators.required],
  //     address: [null, Validators.required],
  //     occupation: [null, Validators.required],
  //     phone: [null, Validators.required],
  //   });
  // }

  updateProfile(user) {
    const { userProfile } = user.body;
    console.log(userProfile)
    this.updateProfileForm = this.fb.group({
      firstname: [userProfile[0].firstname, Validators.required],
      middlename: [userProfile[0].middlename, Validators.required],
      lastname: [userProfile[0].lastname, Validators.required],
      address: [userProfile[0].address, Validators.required],
      occupation: [userProfile[0].occupation, Validators.required],
      phone: [userProfile[0].phone, Validators.required],
    });
  }
  get firstname() {
    return this.updateProfileForm.get("firstname") as FormControl;
  }
  get middlename() {
    return this.updateProfileForm.get("middlename") as FormControl;
  }
  get lastname() {
    return this.updateProfileForm.get("lastname") as FormControl;
  }
  get address() {
    return this.updateProfileForm.get("address") as FormControl;
  }
  get occupation() {
    return this.updateProfileForm.get("occupation") as FormControl;
  }
  get phone() {
    return this.updateProfileForm.get("phone") as FormControl;
  }

  getProfile() {
    const { token } = this.userData;
    console.log(token)
    this.apiHost.getParentProfile(token)
      .subscribe((response: any) => {
        console.log(response)
        this.getProfileData = true;
        this.updateProfile(response);
        this.showSpinner = false;
      }, (error: any) => {
        console.log(error)
        this.showSpinner = false;
      })
  }
  onSubmit() {
    this.showSpinner = true;
    const { token } = this.userData;
    console.log(this.updateProfileForm)
    const payload = {
      token: token,
      firstname: this.updateProfileForm.value.firstname,
      middlename: this.updateProfileForm.value.middlename,
      lastname: this.updateProfileForm.value.lastname,
      address: this.updateProfileForm.value.address,
      occupation: this.updateProfileForm.value.occupation,
      phone: this.updateProfileForm.value.phone
    };
    console.log(payload);
    // this.router.navigate(['verify/add-student']);

    this.apiHost.updateParentProfile(payload)
      .subscribe((response: any) => {
        console.log(response)
        this.showSpinner = false;
        this.router.navigate(['verify/add-student']);
      }, (error: any) => {
        console.log(error)
        this.showSpinner = false;

      })
  }
}
