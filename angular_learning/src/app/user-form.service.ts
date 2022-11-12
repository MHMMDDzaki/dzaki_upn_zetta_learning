import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {
  DataUser = [
    {
      id: 'FE134',
      username: 'Muhammad Dzaki',
      age: 29,
      email: 'dzakzo@email',
      gender: 'Male',
      position: 'Front End',
      maritalStatus: 'Single',
      address: 'Cempaka Putih',
      zipcode: 12345,
      city: 'Jakarta',
      country: 'Indonesia'
    },
    {
      id: 'FE135',
      username: 'Muhammad Dzaki',
      age: 29,
      email: 'dzakzo@email',
      gender: 'Male',
      position: 'Front End',
      maritalStatus: 'Single',
      address: 'Cempaka Putih',
      zipcode: 12345,
      city: 'Jakarta',
      country: 'Indonesia'
    },
    {
      id: 'FE136',
      username: 'Muhammad Dzaki',
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
    // if(this.DataUser.indexOf(param.username) === -1){
      this.DataUser.push(param)
    // } else {
    //   alert('Please Input Diffrent ID')
    // } 
  }

  getUser(index){
    return this.DataUser[index]
  }
}
