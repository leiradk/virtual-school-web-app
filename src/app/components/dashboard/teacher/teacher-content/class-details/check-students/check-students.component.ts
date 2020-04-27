import { Component, OnInit } from '@angular/core';
import { ApiHostService } from '../../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../../services/system.utils';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
@Component({
  selector: 'app-check-students',
  templateUrl: './check-students.component.html',
  styleUrls: ['./check-students.component.scss']
})
export class CheckStudentsComponent implements OnInit {
  public inviteForm: FormGroup;

  student: any;
  userData: any
  classDetails: any;
  constructor(
    private apiService: ApiHostService,
    private system: SystemUtils,
    private fb: FormBuilder,
  ) { this.classFormModel() }


  showSpinner: boolean = true;

  ngOnInit(): void {

    this.userData = this.system.retrieveItem('userData');
    this.classDetails = this.system.retrieveItem('classDetails');

    this.getStudents(this.userData);

  }
  get username() {
    return this.inviteForm.get("username") as FormControl;
  }
  classFormModel() {
    this.inviteForm = this.fb.group({
      username: [null, Validators.required]
    });
  }
  getStudents(userData) {
    const { token } = userData;
    this.apiService.searchStudents(token)
      .subscribe((response: any) => {
        const { body, status } = response;
        if (status === 200) {
          this.student = body;
          this.showSpinner = false;
        }
      })
  }

  onSubmit() {
    const { value } = this.inviteForm;
    const { token } = this.userData;
    const { rid } = this.classDetails;
    console.log(value);
    const payload = {
      token: token,
      classID: rid,
      user: value.username

    }
    console.log(payload);
    this.apiService.sendClassInvites(payload)
      .subscribe((response: any) => {
        console.log(response);
      })
  }
}
