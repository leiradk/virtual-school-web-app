import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { ApiHostService } from "../../../../../../services/api-host.service";
import { SystemUtils } from '../../../../../../services/system.utils';


@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {
  public addStudentForm: FormGroup;
  userData: any;
  saveData: any = false;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private apiHost: ApiHostService,
    private system: SystemUtils,
  ) {
    this.addStudent()
  }

  
  showSuccess() {
    this.toastr.success('Student Added successfully. Reloading List.', 'Congratulations', { timeOut: 5000 })
  }
  showFailed(message) {
    this.toastr.warning(message, 'Warning', { timeOut: 5000 })
  }

  ngOnInit(): void {
    this.userData = this.system.retrieveItem('userData');

  }

  addStudent() {
    this.addStudentForm = this.fb.group({
      firstname: [null, Validators.required],
      middlename: [null, Validators.required],
      lastname: [null, Validators.required],
      gender: [null, Validators.required],
      email: [null, Validators.required],
      gradeLevel: [null, Validators.required],
    });
  }



  onSubmit() {
    const { token } = this.userData
    const payload = {
      token: token,
      email: this.addStudentForm.value.email,
      firstname: this.addStudentForm.value.firstname,
      middlename: this.addStudentForm.value.middlename,
      lastname: this.addStudentForm.value.lastname,
      yearLevel: this.addStudentForm.value.gradeLevel,
      gender: this.addStudentForm.value.gender
    }
    this.saveData = true;
    console.log(payload)
    this.apiHost.addMyStudent(payload)
      .subscribe((response: any) => {
        console.log(response)
        this.saveData = false;
        setTimeout(() => { this.showSuccess(); }, 1000); //add toast message
        // this.router.navigate(['user/p']);
      }, (error: any) => {
        console.log(error)
        this.saveData = false;
        setTimeout(() => { this.showFailed("Opps, something went wrong. Please contact admin."); }, 1000); //add toast message
      })

  }

}
