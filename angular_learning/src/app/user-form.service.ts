import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {
  DataUser = [
    {
      id: 'AD134',
      username: 'Dzakzo',
      age: 29,
      email: 'dzakzo@email',
      gender: 'Male',
      position: 'Front End',
      maritalStatus: 'Single',
      address: 'Cempaka Putih',
      zipcode: 12345,
      city: 'Jakarta',
      country: 'Indonesia'
    }
  ]

  constructor() { }

  addUser(param) {
    this.DataUser.push(param)
  }
}
