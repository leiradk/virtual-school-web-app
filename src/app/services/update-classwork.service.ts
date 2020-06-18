import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateClassworkService {
  private updateParams = new BehaviorSubject<string>(null);
  updateClasswork: Observable<string>;

  constructor() {
    this.updateClasswork = this.updateParams.asObservable();

   }

  setClasswork(token) {
    this.updateParams.next(token);
  }

}
