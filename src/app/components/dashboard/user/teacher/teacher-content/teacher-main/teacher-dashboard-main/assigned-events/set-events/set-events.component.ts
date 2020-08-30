import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { ApiHostService } from "../../../../../../../../../services/api-host.service";
import { Router } from "@angular/router";
import { SystemUtils } from '../../../../../../../../../services/system.utils';
@Component({
  selector: 'app-set-events',
  templateUrl: './set-events.component.html',
  styleUrls: ['./set-events.component.scss']
})
export class SetEventsComponent implements OnInit {
  public setEventsForm: FormGroup;
  constructor(
    private apiHost: ApiHostService,
    private fb: FormBuilder,
    private router: Router,
    private system: SystemUtils,
  ) { 
    this.setEventModel();
  }

  ngOnInit(): void {
  }
  setEventModel() {
    this.setEventsForm = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
    });
  }
  onSubmit() {
    const { token } = this.system.retrieveItem('userData');
    const payload = {
      token: token,
      title: this.setEventsForm.value.title,
      description: this.setEventsForm.value.description,
      startDate: this.setEventsForm.value.startDate,
      endDate: this.setEventsForm.value.endDate,
      classID: ''
    }
    console.log(payload)
    this.apiHost.addEventScheduleForTeacher(payload)
      .subscribe((response: any) => {
        console.log(response)
      },(error: any) => {
        console.log(error)
      })
  }
}
