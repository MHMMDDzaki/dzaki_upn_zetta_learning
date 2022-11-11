import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {
  DataUser = []

  constructor() { }

  addUser(param){
    this.DataUser.push(param)
  }
}
