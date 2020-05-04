import { Component, OnInit, HostListener } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { ApiHostService } from '../../../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../../../services/system.utils';
import { subscribeOn } from 'rxjs/operators';
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
  arr: any = [];
  public postForm: FormGroup;
  loading = false;
  viewAllComments: any = [];
  postID: any;
  getAllComments: any = [];
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

  //get comments on the student side
  getComments(id) {
    const { token } = this.userData;
    this.getAllComments = [];
    this.apiService.getStudentComments(id, token)
      .subscribe((response: any) => {
        const { comments } = response.body;
        this.getAllComments = comments;
        // if (this.getAllComments === undefined) {
        //   this.getAllComments.splice(index, 0, comments)
        //   console.log(this.getAllComments);
        //   if (this.getAllComments[index].length > 0) {
        //     console.log('data')
        //   }
        // } else {
        // }
        console.log(this.getAllComments);
      }, (error: any) => {
        console.log(error);

      })
  }

  //set the payload for setComment()
  addInput(comment, value) {
    const { postID } = value;
    const { token } = this.userData;
    const payload = {
      token: token,
      postID: postID,
      comment: comment
    }
    this.setComment(payload);
  }
  //add comments from the backend
  setComment(payload) {

    console.log(this.userData);
    const { userType } = this.userData.data;
    if (userType === '10002') {
      console.log('teacher');
    } else {
      this.postStudentComments(payload);
    }
  }
  //add comments from the student
  postStudentComments(payload) {
    this.apiService.sendComment(payload)
      .subscribe((response: any) => {
        console.log(response);
      }, (error: any) => {
        console.log(error);
      })
  }

  // get data (post details) to the backend
  getPosts() {
    const { token } = this.userData;
    const { rid } = this.classDetails;
    console.log('userData:', this.userData);
    const { usertype } = this.userData.data;
    console.log(usertype);
    if (usertype === '10002') {
      console.log('teacher');
      this.teacherSide(rid, token);
    } else {
      console.log('student');
      this.studentSide(rid, token)

    }


  }

  //teacher side api for getting post
  teacherSide(rid, token) {
    this.apiService.getTeacherPosts(rid, token)
      .subscribe((response: any) => {
        console.log(response);
        const { post } = response.body;
        const { status } = response;
        console.log(post);
        if (status === 200) {
          this.postDetails = post;
        }

      }, (error: any) => {
        console.log(error);
      })
  }
  //student side api for getting post
  studentSide(rid, token) {
    this.apiService.getStudentPosts(rid, token)
      .subscribe((response: any) => {
        console.log(response);
        const { post } = response.body;
        const { status } = response;
        console.log(post);
        if (status === 200) {
          this.postDetails = post;
          for (let i = 0; i <= (this.postDetails.length - 1); i++) {
            console.log(i);
            const bool = false;
            this.viewAllComments.push(bool)
          }
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

  //GET the postID for payload on api comments
  viewComments(view, id) {
    console.log(id);
    console.log(this.viewAllComments[2]);

    for (let i = 0; i < this.postDetails.length; i++) {
      console.log(i);
      console.log(this.postDetails[i]);
      console.log(this.viewAllComments[i]);
      if (this.postDetails[i].postID === id) {
        this.viewAllComments[i] = view;
      } else {
        this.viewAllComments[i] = false;
      }
    }
    this.postID = id;
    this.getComments(id);
  }
}
