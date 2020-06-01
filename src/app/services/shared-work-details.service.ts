import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedWorkDetailsService {
  private indexParams = new BehaviorSubject<string>(null);
  private classWorkParams = new BehaviorSubject<string>(null);
  index: Observable<string>;
  classWork: Observable<string>;
  constructor() {
    this.index = this.indexParams.asObservable();
    this.classWork = this.classWorkParams.asObservable();
  }

  setIndex(token) {
    this.indexParams.next(token);
  }
  setClassWork(classWork) {
    this.classWorkParams.next(classWork);
  }
}
