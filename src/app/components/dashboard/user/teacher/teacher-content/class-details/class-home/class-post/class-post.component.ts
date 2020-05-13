import { Component, OnInit, HostListener } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { ApiHostService } from '../../../../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../../../../services/system.utils';
import { subscribeOn } from 'rxjs/operators';
import { SharedPostService } from '../../../../../../../../services/shared-post.service';
import { Observable } from 'rxjs';

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
  unviewed: boolean = false;
  postID: any;
  getAllComments: any = [];
  pathParam: Observable<string>;
  commentParams: Observable<string>;
  post: any;
  commentUpdate: any;
  storeAllComments: any = [];
  constructor(
    private fb: FormBuilder,
    private apiService: ApiHostService,
    private system: SystemUtils,
    private sharedPost: SharedPostService
  ) {
    this.postModel();
  }

  isSticky: boolean = false;

  ngOnInit(): void {
    this.classDetails = this.system.retrieveItem('classDetails');
    this.userData = this.system.retrieveItem('userData');
    this.pathParam = this.sharedPost.post;
    this.pathParam.subscribe((post: any) => {
      this.postDetails = post;
      if (this.postDetails === null) {
        this.getPosts();
      }
    })

    const data = [
    ];
    const pushing = [{
      data: 'dasdsad',
    }]
    data.push(pushing)
    console.log(data[0][0]);
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
  getComments(id, index) {
    const { token } = this.userData;
    this.getAllComments = [];
    // console.log(this.userData.data);
    const { usertype } = this.userData.data;
    this.sharedPost.setComments(this.storeAllComments);
    console.log(usertype);
    if (usertype === '10002') {
      this.getTeacherComments(id, token, index);
    } else {
      this.getStudentComments(id, token);

    }
  }

  getTeacherComments(id, token, index) {
    this.commentParams = this.sharedPost.comments;
    this.commentParams.subscribe((comment: any) => {
      console.log(comment);
      if (comment[index] === undefined) {
        console.log('data');
        this.apiService.getTeacherComments(id, token)
          .subscribe((response: any) => {
            const { comments } = response.body;
            this.getAllComments = comments;
            this.storeAllComments[index] = this.getAllComments;
            this.sharedPost.setComments(this.storeAllComments);
          }, (error: any) => {
            console.log(error);
            const { message, status } = error.error;
            if (status === 404) {
              console.log(message);
              this.storeAllComments[index] = undefined;
            }

          })
      } else {
        this.getAllComments = this.storeAllComments[index];

      }
    })


  }
  getStudentComments(id, token) {
    this.apiService.getStudentComments(id, token)
      .subscribe((response: any) => {
        const { comments } = response.body;
        this.getAllComments = comments;

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

    const { userType } = this.userData.data;
    if (userType === '10002') {
      this.postTeacherComments(payload);
    } else {
      this.postStudentComments(payload);
    }
  }

  //add comments from the teacher
  postTeacherComments(payload) {
    this.apiService.sendCommentTeacher(payload)
      .subscribe((response: any) => {
        console.log(response);
      }, (error: any) => {
        console.log(error);
      })
  }
  //add comments from the student
  postStudentComments(payload) {
    this.apiService.sendCommentStudent(payload)
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
    const { usertype } = this.userData.data;
    if (usertype === '10002') {
      this.teacherSide(rid, token);
    } else {
      this.studentSide(rid, token)

    }


  }

  //teacher side api for getting post
  teacherSide(rid, token) {
    this.apiService.getTeacherPosts(rid, token)
      .subscribe((response: any) => {
        const { post } = response.body;
        const { status } = response;
        if (status === 200) {
          this.postDetails = post;
          this.sharedPost.setRouteToken(this.postDetails);
        }

      }, (error: any) => {
        console.log(error);
      })
  }
  //student side api for getting post
  studentSide(rid, token) {
    this.apiService.getStudentPosts(rid, token)
      .subscribe((response: any) => {
        const { post } = response.body;
        const { status } = response;
        if (status === 200) {
          this.postDetails = post;
          this.sharedPost.setRouteToken(this.postDetails);
          // for (let i = 0; i <= (this.postDetails.length - 1); i++) {
          //   const bool = false;
          //   this.viewAllComments.push(bool)
          // }
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
  viewComments(view, id, index) {
    this.unviewed = !this.unviewed;
    let data: any = [];
    for (let i = 0; i < this.postDetails.length; i++) {

      if (this.postDetails[i].postID === id) {
        this.viewAllComments[i] = view;
      } else {
        this.viewAllComments[i] = false;
      }
      if (this.storeAllComments) {
        if (this.storeAllComments[i]) {
        } else {
          this.storeAllComments[i] = undefined
        }
      } else {
        this.storeAllComments[i] = undefined
      }

    }

    if (view === true) {
      this.postID = id;
      this.getComments(id, index);
    }
  }
}
