import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SystemUtils } from './system.utils';
@Injectable({
  providedIn: 'root'
})
export class ApiHostService {

  localhost = `http://139.162.238.76:8000/vs/`
  constructor(
    private https: HttpClient
  ) { }
  //post data
  signin(payload) {
    return this.https.post(`${this.localhost}login`, payload)
  }

  addTeacher(payload) {
    return this.https.post(`${this.localhost}admin/add/teacher`, payload);
  }
  addStudent(payload) {
    return this.https.post(`${this.localhost}admin/add/student`, payload);
  }

  //get data
  getTeacher(token) {
    return this.https.get(`${this.localhost}admin/list/teachers?token=${token}`);
  }
  getStudents(token) {
    return this.https.get(`${this.localhost}admin/list/students?token=${token}`);
  }
  getClassroom(token) {
    return this.https.get(`${this.localhost}teacher/get/classes?token=${token}`);
  }
}
