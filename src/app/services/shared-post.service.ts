import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedPostService {
  private pathParams = new BehaviorSubject<string>(null);
  private commentParams = new BehaviorSubject<string>(null);
  post: Observable<string>;
  comments: Observable<string>;
  constructor() {
    this.post = this.pathParams.asObservable();
    this.comments = this.commentParams.asObservable();
  }

  setRouteToken(token) {
    this.pathParams.next(token);
  }

  setComments(comments) {
    this.commentParams.next(comments);
  }
}
