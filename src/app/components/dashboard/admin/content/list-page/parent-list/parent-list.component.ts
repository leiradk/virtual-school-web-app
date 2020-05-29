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
@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.scss', "../../../../../../../assets/staff_teacher/css/styles.min.css"]
})
export class ParentListComponent implements OnInit {
  public addParentForm: FormGroup;

  searchText;
  public people: any;
  p: number = 1;
  viewList: number = 5;
  parentMessage: any;
  showSpinner: boolean = true;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiHostService,
    private toastr: ToastrService,
    private system: SystemUtils,
    private router: Router,
    private adminList: AdminListDataService
  ) { } userData: any;
  error: boolean = false;
  parentParams: Observable<string>;

  ngOnInit(): void {
    this.userData = this.system.retrieveItem('userData');
    this.parentParams = this.adminList.allParents;
    this.checkParentList();
  }
  checkParentList() {
    this.parentParams.pipe(take(1)).subscribe({
      next: (post) => {
        console.log(post);
        if (post === null || post === undefined) {
          this.getParent();
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
  //get data list for parents
  getParent() {
    const { token } = this.userData;
    this.apiService.getParents(token)
      .subscribe((response: any) => {
        this.error = false;
        const { status, body } = response;
        if (status === 200) {
          console.log(response);
          this.people = body;
          console.log('people', this.people)
          this.adminList.setAllParents(this.people);
          this.showSpinner = false;
        }
      }, (error: any) => {
        const { status, message } = error.error;
        setTimeout(() => { this.showFailed(message); }, 1000); //add toast message
        // this.addParentForm.reset(); //reset form
        this.showSpinner = false;
        this.error = true;
        if (status === 500) {
          this.parentMessage = "Ops. Something went wrong, Please try again"
        } else if (status === 401) {
          this.parentMessage = "Unauthorized Access of Data"
        } else if (status === 404) {
          this.parentMessage = "Opps! Looks like this list is empty."
        } else {
          this.parentMessage = "Ops. Something went wrong, Please try again"
        }

      })
  }

  showSuccess() {
    this.toastr.success('Teacher Added successfully. Reloading List.', 'Congratulations', { timeOut: 5000 })
  }

  showFailed(message) {
    this.toastr.warning(message, 'Warning', { timeOut: 5000 })
  }

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
}
