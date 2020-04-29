import { Component, OnInit, HostListener } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
@Component({
  selector: 'app-class-post',
  templateUrl: './class-post.component.html',
  styleUrls: ['./class-post.component.scss']
})

export class ClassPostComponent implements OnInit {
  myFocusVar: any = false;
  comments: any = [];
  public postForm: FormGroup;
  loading = false;
  constructor(
    private fb: FormBuilder,
  ) {
    this.postModel();
  }

  isSticky: boolean = false;

  ngOnInit(): void {
    this.comments = [{
      user: "Wilver Deypalubos",
      comment: "this is a comment"
    },
    {
      user: "Melvin Elayron",
      comment: "this is a comment"
    }
    ]
  }

  postModel() {
    this.postForm = this.fb.group({
      postContent: [null, Validators.required],
    });
  }
  get postContent() {
    return this.postForm.get('postContent') as FormControl;
  }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }

  onSubmit() {
    const { value } = this.postForm;
    console.log(value);
    const payload = [{
      user: "Melvin Elayron",
      comment: value.postContent
    }];
    for (let i = 0; i <= this.comments.length; i++){
      payload.push(this.comments[i]);
    }
    this.comments = payload;
  }
}
