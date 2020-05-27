import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminListDataService {

  private studentParams = new BehaviorSubject<string>(null);
  private teacherParams = new BehaviorSubject<string>(null);
  private parentParams = new BehaviorSubject<string>(null); 
  private inactiveStudentParams = new BehaviorSubject<string>(null);
  private inactiveTeacherParams = new BehaviorSubject<string>(null);
  private inactiveParentParams = new BehaviorSubject<string>(null);
  student: Observable<string>;
  teacher: Observable<string>;
  parent: Observable<string>;
  inactiveStudent: Observable<string>;
  inactiveTeacher: Observable<string>;
  inactiveParent: Observable<string>;
  constructor() {
    this.student = this.studentParams.asObservable();
    this.teacher = this.teacherParams.asObservable();
    this.parent = this.teacherParams.asObservable();
    this.inactiveStudent = this.inactiveStudentParams.asObservable();
    this.inactiveTeacher = this.inactiveTeacherParams.asObservable();
    this.inactiveParent = this.inactiveParentParams.asObservable();
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
  setInactiveStudent(token) {
    this.inactiveStudentParams.next(token);
  }

  setInactiveTeacher(comments) {
    this.inactiveTeacherParams.next(comments);
  }

  setInactiveParents(comments) {
    this.inactiveParentParams.next(comments);
  }
}
