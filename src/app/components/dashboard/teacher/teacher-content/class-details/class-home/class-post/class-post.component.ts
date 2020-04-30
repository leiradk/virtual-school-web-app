import { Component, OnInit, HostListener } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { ApiHostService } from '../../../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../../../services/system.utils';
@Component({
  selector: 'app-class-post',
  templateUrl: './class-post.component.html',
  styleUrls: ['./class-post.component.scss']
})

export class ClassPostComponent implements OnInit {
  myFocusVar: any = false;
  comments: any = [];
  classDetails: any;
  userData: any;
  postDetails: any;
  public postForm: FormGroup;
  loading = false;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiHostService,
    private system: SystemUtils
  ) {
    this.postModel();
  }

  isSticky: boolean = false;

  ngOnInit(): void {
    this.classDetails = this.system.retrieveItem('classDetails');
    this.userData = this.system.retrieveItem('userData');
    this.comments = [{
      user: "Wilver Deypalubos",
      comment: "this is a comment"
    },
    {
      user: "Melvin Elayron",
      comment: "this is a comment"
    }
    ];
    this.getPosts();
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

  

  // get data (post details) to the backend
  getPosts() {
    const { token } = this.userData;
    const { rid } = this.classDetails;
    this.apiService.getTeacherPosts(rid, token)
      .subscribe((response: any) => {
        console.log(response);
        const { post } = response.body;
        const { status } = response;
        console.log(post);
        if(status === 200) {
          this.postDetails = post;
        }

      }, (error: any) => {
        console.log(error);
      })
  }

  //passing data (post details) to the backend
  onSubmit() {
    const { value } = this.postForm;
    const { token } = this.userData;
    const { rid } = this.classDetails
    // console.log(value);
    // const payload = [{
    //   user: "Melvin Elayron",
    //   comment: value.postContent
    // }];
    // for (let i = 0; i <= this.comments.length; i++){
    //   payload.push(this.comments[i]);
    // }
    // this.comments = payload;
    // console.log(value);
    const payload = {
      token: token,
      message: value.postContent,
      classID: rid,
    };
    this.apiService.teacherPost(payload)
      .subscribe((response: any) => {
        console.log(response);
      }, (error: any) => {
        console.log(error);
      });
  }
}
