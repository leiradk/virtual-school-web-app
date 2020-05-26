import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminListDataService {

  private studentParams = new BehaviorSubject<string>(null);
  private teacherParams = new BehaviorSubject<string>(null);
  private parentParams = new BehaviorSubject<string>(null);
  student: Observable<string>;
  teacher: Observable<string>;
  parent: Observable<string>;
  constructor() {
    this.student = this.studentParams.asObservable();
    this.teacher = this.teacherParams.asObservable();
    this.parent = this.teacherParams.asObservable();
  }

  setStudent(token) {
    this.studentParams.next(token);
  }

  setTeacher(comments) {
    this.teacherParams.next(comments);
  }

  setParents(comments) {
    this.parentParams.next(comments);
  }
}
