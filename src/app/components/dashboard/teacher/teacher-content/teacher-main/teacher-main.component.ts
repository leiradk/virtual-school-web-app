import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
@Component({
  selector: 'app-teacher-main',
  templateUrl: './teacher-main.component.html',
  styleUrls: ['./teacher-main.component.scss']
})
export class TeacherMainComponent implements OnInit {
  public addClassFOrm: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) {
    this.classFormModel();
  }

  ngOnInit(): void {
  }

  get name() {
    return this.addClassFOrm.get("name") as FormControl;
  }
  get subjectname() {
    return this.addClassFOrm.get("subjectname") as FormControl;
  }
  get gradelevel() {
    return this.addClassFOrm.get("gradelevel") as FormControl;
  }
  classFormModel() {
    this.addClassFOrm = this.fb.group({
      name: [null, Validators.required],
      subjectname: [null, Validators.required],
      gradelevel: [null, Validators.required],

    });
  }

  addClass() {
    console.log('data')
  }
  onSubmit() {
    console.log('dadsadsad');
    const { value } = this.addClassFOrm;
    console.log(value);
  }
}
