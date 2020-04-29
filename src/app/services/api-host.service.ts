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

  //API for sign-in
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

  //api for adding teacher on admin side
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

  //add student admin side
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

  //addd classroom admin side
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

  //send classroom invitation to students
  sendClassInvites(payload) {
    return this.https.post(`${this.localhost}teacher/send/invite/class`, payload)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }
  //put data
  //accept classroom invitation on student side
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



  //get data
  //get list teacher for the admin 
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

  // get list student for the admin
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

  //get classroom for a teacher
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

  //get classroom invitation for a student
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

  //search student based on the list
  searchStudents(token) {
    return this.https.get(`${this.localhost}list/student?token=${token}`)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }

  //get all classroom invitations for a student
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
