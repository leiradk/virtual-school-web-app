import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
@Component({
  selector: "app-classlist",
  templateUrl: "./classlist.component.html",
  styleUrls: ["./classlist.component.scss"],
})
export class ClasslistComponent implements OnInit {
  public addClassForm: FormGroup;

  searchText;
  public people: any;
  p: number = 1;
  viewList: number = 5;

  constructor(
    private fb: FormBuilder
  ) {
    this.studentFormModel();
   }

  ngOnInit(): void {
    this.mockData();
  }
  get name() {
    return this.addClassForm.get('name') as FormControl;
  } 
  get level() {
    return this.addClassForm.get('level') as FormControl;
  }
  get section() {
    return this.addClassForm.get('section') as FormControl;
  }
  get subject() {
    return this.addClassForm.get('subject') as FormControl;
  }
  studentFormModel() {
    this.addClassForm = this.fb.group({
      name: [null, Validators.required],
      level: [null, Validators.required],
      section: [null, Validators.required],
      subject: [null, Validators.required],
   
    });
  }
onSubmit() {

}
  mockData() {
    this.people = [
      {
        Name: "Tiger",
        level: "Grade 11",
        section: "Section A",
        subject: "Math",
      },

    ];
  }
}
