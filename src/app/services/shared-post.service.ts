import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedPostService {
  private pathParams = new BehaviorSubject<string>(null);
  post: Observable<string>;
  constructor() { 
    this.post = this.pathParams.asObservable();
  }

  setRouteToken(token) {
    this.pathParams.next(token);
  }

}
