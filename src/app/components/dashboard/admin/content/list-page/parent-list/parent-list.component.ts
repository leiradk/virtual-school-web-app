import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { ApiHostService } from "../../../../../../services/api-host.service";
import { ToastrService } from "ngx-toastr";
import { SystemUtils } from '../../../../../../services/system.utils';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AdminListDataService } from "../../../../../../services/admin-list-data.service";


declare var jQuery: any;

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.scss', "../../../../../../../assets/staff_teacher/css/styles.min.css"]
})

export class ParentListComponent implements OnInit {
  public addStaffFOrm: FormGroup;

  searchText;
  public people: any = [];
  p: number = 1;
  viewList: number = 5;
  userData: any;
  error: boolean = false;
  parentParams: Observable<string>;
  teacherMessage: any;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiHostService,
    private toastr: ToastrService,
    private system: SystemUtils,
    private router: Router,
    private adminList: AdminListDataService
  ) {
    this.studentFormModel();

  }

  showSpinner: boolean = true;

  ngOnInit(): void {
    // this.mockData();
    this.userData = this.system.retrieveItem('userData');

    this.data = this.system.retrieveItem("userData");
    if (this.data === undefined || this.data === null) {
      this.router.navigate(["/Landing-Page"]);
    } else {
      const { token } = this.data;

      if (token === undefined) {
        this.router.navigate(["/Landing-Page"]);
      } else {
        const { data } = this.data;
        if (parseInt(data.usertype) === 10002) {
          this.router.navigate(["/teacher"]);
        }
      }
    }
    this.parentParams = this.adminList.allParents;
    this.checkParentsList();
  }

  checkParentsList() {
    this.parentParams.pipe(take(1)).subscribe({
      next: (post) => {
        if (post === null || post === undefined) {
          this.getParents();
        } else {
          this.showSpinner = false;
          this.error = false;
          this.people = post;
        }
      },
      error: err => {
        console.log(err)

      },
      complete: () => {

      },
    });
  }
  //get data list for teacher and staff
  getParents() {
    const { token } = this.userData;
    this.apiService.getParents(token)
      .subscribe((response: any) => {
        this.error = false;
        const { status, body } = response;
        console.log(response)
        if (status === 200) {
          this.people = body;
          this.adminList.setAllTeachers(this.people);
          this.showSpinner = false;
        }
      }, (error: any) => {
        const { status, message } = error.error;
        setTimeout(() => { this.showFailed(message); }, 1000); //add toast message
        this.addStaffFOrm.reset(); //reset form
        this.showSpinner = false;
        this.error = true;
        if (status === 500) {
          this.teacherMessage = "Ops. Something went wrong, Please try again"
        } else if (status === 401) {
          this.teacherMessage = "Unauthorized Access of Data"
        } else if (status === 404) {
          this.teacherMessage = "Opps! Looks like this list is empty."
        } else {
          this.teacherMessage = "Ops. Something went wrong, Please try again"
        }

      })
  }

  showSuccess() {
    this.toastr.success('Teacher Added successfully. Reloading List.', 'Congratulations', { timeOut: 5000 })
  }

  showFailed(message) {
    this.toastr.warning(message, 'Warning', { timeOut: 5000 })
  }



  //adding teacher and staff
  onSubmit() {
    this.error = false;
    const { value } = this.addStaffFOrm;
    const data = {
      email: value.email,
      firstname: value.firstname,
      lastname: value.lastname,
      // username: value.username,  
      password: value.password,
      // position: 'parent',
      // department: 'parent'
    }
    console.log(data);
    // get chckbox status
    // let contModal = <HTMLInputElement>document.getElementById('continueModal');
    // if (!contModal.checked) {
    // }

    this.showSpinner = true;

    // ------>  Please check the code below. I want to put the top code snippet inside if(status === 200)
    // adds a teacher

  }
  studentFormModel() {
    this.addStaffFOrm = this.fb.group({

      // username: [null, Validators.required],
      email: [null, Validators.required],
      lastname: [null, Validators.required],
      firstname: [null, Validators.required],
      // password: [null, Validators.required],
      // username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]],
      repassword: [null, [Validators.required, Validators.minLength(6)]],
    }, {
    });
  }

  // studentFormModel() {
  //   this.addStaffFOrm = this.fb.group({

  //     position: [null, Validators.required],
  //     department: [null, Validators.required],
  //     username: [null, Validators.required],
  //     password: [null, [Validators.required, Validators.minLength(6)]],
  //     repassword: [null, [Validators.required, Validators.minLength(6)]],
  //   }, {
  //   });
  // }

  dateCreated(date) {
    const splitData = date.split(' ');
    return splitData[0];
  }

  getStatus(status) {
    if (status === 'Active' || status === 'active') {
      return true;
    } else {
      return false;
    }
  }
  // get position() {
  //   return this.addStaffFOrm.get('position') as FormControl;
  // }
  get email() {
    return this.addStaffFOrm.get('email') as FormControl;
  }
  get firstname() {
    return this.addStaffFOrm.get('firstname') as FormControl;
  }
  get lastname() {
    return this.addStaffFOrm.get('lastname') as FormControl;
  }
  // get username() {
  //   return this.addStaffFOrm.get('username') as FormControl;
  // }
  get password() {
    return this.addStaffFOrm.get('password') as FormControl;
  }
  get repassword() {
    return this.addStaffFOrm.get('repassword') as FormControl;
  }

  //Pull from archive and add to archive hihi

  data: any = [];
  getUsername: any;
  getType: any;


  //teacher variables
  teacherData: any = [];
  teacherError: boolean = false;
  refreshTeacher: boolean = false;
  teacherSearchText: any;
  public teacherShowSearch: boolean = false;

  getUsernameData(user, type) {
    this.getUsername = user;
    this.getType = type
  }

  pullFromArchive() {
    const { token } = this.data;
    const payload = {
      token: token,
      username: this.getUsername,
      action: 'active'
    }
    this.showSpinner = true;

    this.apiService.pullFromArchive(payload)
      .subscribe((response: any) => {
        this.getParents();
        this.adminList.setInactiveParents(null);
        this.adminList.setAllParents(null);
        this.adminList.setParents(null);
        this.parentParams.pipe(take(1)).subscribe({
          next: (post) => {
          },
          error: err => {
            console.log(err)

          },
          complete: () => {

          },
        });
      }, (error: any) => {
        console.log(error);
      })

  }

  addToArchive() {
    const { token } = this.data;

    const payload = {
      token: token,
      username: this.getUsername,
      action: 'inactive'
    }
    this.showSpinner = true;
    this.apiService.addToArchive(payload)
      .subscribe((response: any) => {
        this.adminList.setInactiveParents(null);
        this.adminList.setParents(null);
        this.adminList.setAllParents(null);
        this.getParents();
      }, (error: any) => {
        console.log(error);
      })
  }
}
