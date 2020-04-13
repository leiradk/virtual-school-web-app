import { Injectable, Inject } from "@angular/core";

@Injectable()
export class SystemUtils {
  constructor() {}

  storeLocal(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  retrieveItem(key) {
    const item = JSON.parse(localStorage.getItem(key));
    return item;
  }

  deleteKey(key) {
    localStorage.removeItem(key);
  }
}
