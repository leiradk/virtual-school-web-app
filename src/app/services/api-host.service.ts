import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SystemUtils } from './system.utils';
@Injectable({
  providedIn: 'root'
})
export class ApiHostService {

  localhost = `http://139.162.238.76:5000/vs/`
  constructor(
    private https: HttpClient
  ) { }

  signin(payload) {
    return this.https.post(`${this.localhost}login`, payload)
  }

  addTeacher(payload) {
    return this.https.post(`${this.localhost}admin/add/teacher`, payload);
  }
}
