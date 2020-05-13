import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedWorkDetailsService {
  private pathParams = new BehaviorSubject<string>(null);
  workDetails: Observable<string>;

  constructor() {
    this.workDetails = this.pathParams.asObservable();
  }

  setRouteToken(token) {
    this.pathParams.next(token);
  }
}
