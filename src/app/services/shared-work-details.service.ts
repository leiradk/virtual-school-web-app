import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedWorkDetailsService {
  private pathParams = new BehaviorSubject<string>(null);
  private classWorkParams = new BehaviorSubject<string>(null);
  workDetails: Observable<string>;
  classWork: Observable<string>;
  constructor() {
    this.workDetails = this.pathParams.asObservable();
    this.classWork = this.classWorkParams.asObservable();
  }

  setRouteToken(token) {
    this.pathParams.next(token);
  }
  setClassWork(classWork) {
    this.classWorkParams.next(classWork);
  }
}
