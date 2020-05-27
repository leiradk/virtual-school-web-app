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
  private allTeacherParams = new BehaviorSubject<string>(null);
  student: Observable<string>;
  teacher: Observable<string>;
  parent: Observable<string>;
  inactiveStudent: Observable<string>;
  inactiveTeacher: Observable<string>;
  inactiveParent: Observable<string>;
  allTeacher: Observable<string>;
  constructor() {
    this.student = this.studentParams.asObservable();
    this.teacher = this.teacherParams.asObservable();
    this.parent = this.teacherParams.asObservable();
    this.inactiveStudent = this.inactiveStudentParams.asObservable();
    this.inactiveTeacher = this.inactiveTeacherParams.asObservable();
    this.inactiveParent = this.inactiveParentParams.asObservable();
    this.allTeacher = this.allTeacherParams.asObservable();
  }

  setStudent(activeStudents) {
    this.studentParams.next(activeStudents);
  }

  setTeacher(activeTeachers) {
    this.teacherParams.next(activeTeachers);
  }

  setParents(activeParents) {
    this.parentParams.next(activeParents);
  }
  setInactiveStudent(inactiveStudents) {
    this.inactiveStudentParams.next(inactiveStudents);
  }

  setInactiveTeacher(inactiveTeachers) {
    this.inactiveTeacherParams.next(inactiveTeachers);
  }

  setInactiveParents(inactiveParents) {
    this.inactiveParentParams.next(inactiveParents);
  }
  setAllTeachers(allTeachers) {
    this.allTeacherParams.next(allTeachers);
  }
}
