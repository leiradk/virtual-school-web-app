import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SystemUtils } from './system.utils';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
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
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      )
  }

  addTeacher(payload) {
    return this.https.post(`${this.localhost}admin/add/teacher`, payload)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }
  addStudent(payload) {
    return this.https.post(`${this.localhost}admin/add/student`, payload)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }
  addClass(payload) {
    return this.https.post(`${this.localhost}teacher/add/class`, payload)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }

  //put data
  acceptInvitation(payload) {
    return this.https.put(`${this.localhost}student/accept/class/invite`, payload)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }


  sendClassInvites(payload) {
    return this.https.post(`${this.localhost}teacher/send/invite/class`, payload);
  }

  //get data
  getTeacher(token) {
    return this.https.get(`${this.localhost}admin/list/teachers?token=${token}`)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }
  getStudents(token) {
    return this.https.get(`${this.localhost}admin/list/students?token=${token}`)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }
  getClassroom(token) {
    return this.https.get(`${this.localhost}teacher/get/classes?token=${token}`)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      )
  }
  getClassInvitation(token) {
    return this.https.get(`${this.localhost}student/list/class/invitation?token=${token}`)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }
  searchStudents(token) {
    return this.https.get(`${this.localhost}list/student?token=${token}`);
  }

  getInvitedStudents(id, token) {
    return this.https.get(`${this.localhost}teacher/list/invited/by/class?classID=${id}&token=${token}`)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }

}
