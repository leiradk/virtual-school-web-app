import { Component, OnInit } from '@angular/core';
import { ApiHostService } from '../../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../../services/system.utils';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";

declare var jQuery: any;

@Component({
  selector: 'app-invite-users',
  templateUrl: './invite-users.component.html',
  styleUrls: ['./invite-users.component.scss']
})
export class InviteUsersComponent implements OnInit {
  public inviteForm: FormGroup;

  student: any;
  invited: any;
  userData: any
  classDetails: any;
  showSpinner: boolean = true;
  error: boolean = false;
  errorMessage: any;

  constructor(
    private apiService: ApiHostService,
    private system: SystemUtils,
    private fb: FormBuilder,
    private toastr: ToastrService,
  ) { this.classFormModel() }

  ngOnInit(): void {

    this.userData = this.system.retrieveItem('userData');
    this.classDetails = this.system.retrieveItem('classDetails');

    // this.getStudents(this.userData);
    this.getInvitedStudents();

  }

  showSuccess() {
    this.toastr.success('Invite has been successfully sent', 'Congratulations', { timeOut: 4000 })
  }
  showFailed() {
    this.toastr.warning('Invite have failed to sent', 'Try Again', { timeOut: 4000 })
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
        this.showSpinner = false;
        console.log(response);

        const { body, status } = response;
        if (status === 200) {
          this.student = body;
          this.showSpinner = false;
        }
      }, (error: any) => {
        console.log(error);
        this.showSpinner = false;
      })
  }

  onSubmit() {
    const { value } = this.inviteForm;
    const { token } = this.userData;
    const { rid } = this.classDetails;
    const payload = {
      token: token,
      classID: rid,
      user: value.username

    }
    this.error = false;
    this.showSpinner = true;
    this.apiService.sendClassInvites(payload)
      .subscribe((response: any) => {
        console.log(response);
        this.getStudents(this.userData);
        this.showSuccess(); // show toastr
        jQuery('#myModal').modal('hide'); //close modal after submit
      }, (error => {
        this.showSpinner = false;
        this.showFailed()
        jQuery('#myModal').modal('hide'); //close modal after submit
      }))

  }


  getInvitedStudents() {
    const { token } = this.userData;
    const { rid } = this.classDetails;
    this.apiService.getInvitedStudents(rid, token)
      .subscribe((response: any) => {
        const { status } = response;
        this.showSpinner = false;
        if (status === 200) {
          const { body } = response;
          this.invited = body;
        }

      }, (error: any) => {
        console.log(error);
        const { status, message } = error.error;
        this.error = true;
        this.showSpinner = false;
        if(status === 404) {
          this.errorMessage = message;
        } else if(status === 500) {
          this.errorMessage = "Something went wrong, please try again"
        }
      });
  }
}
