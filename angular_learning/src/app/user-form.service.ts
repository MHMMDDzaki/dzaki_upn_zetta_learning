import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

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
      addresses: [{
        address: 'Cempaka Putih',
        zipcode: 12345,
        city: 'Jakarta',
        country: 'Indonesia'
      }]
    },
    {
      id: 'FE135',
      username: 'Muhammad Dzaki',
      age: 29,
      email: 'dzakzo@email',
      gender: 'Male',
      position: 'Front End',
      maritalStatus: 'Single',
      addresses: [{
        address: 'Cempaka Putih',
        zipcode: 12345,
        city: 'Jakarta',
        country: 'Indonesia'
      }]
    },
    {
      id: 'FE136',
      username: 'Muhammad Dzaki',
      age: 29,
      email: 'dzakzo@email',
      gender: 'Male',
      position: 'Front End',
      maritalStatus: 'Single',
      addresses: [
        {
          address: 'Cempaka Putih',
          zipcode: 12345,
          city: 'Jakarta',
          country: 'Indonesia'
        },
        {
          address: 'Cempaka Putih',
          zipcode: 12345,
          city: 'Jakarta',
          country: 'Indonesia'
        }
      ]
    }
  ]
  msg: number

  constructor() { }

  addUser(param) {
    if(this.DataUser.map(item => item.id).indexOf(param.id) === -1){
      this.DataUser.push(param)
      Swal.fire(
        'Good Job!',
        'Data Has been Added!',
        'success'
      )
      return this.msg=1
    } else {
      Swal.fire(
        'Error!',
        'Please Input diffrent ID!',
        'error'
      )
      return this.msg=0
    } 
  }

  editUser(param) {
    const temp = this.DataUser.map(item => item.id).indexOf(param.id);
    console.log(temp)
    if(temp !== -1){
      this.DataUser[temp].username = param.username
      this.DataUser[temp].age = param.age
      this.DataUser[temp].email = param.email
      this.DataUser[temp].gender = param.gender
      this.DataUser[temp].position = param.position
      this.DataUser[temp].maritalStatus = param.maritalStatus
      this.DataUser[temp].addresses = param.addresses

      Swal.fire(
        'Good Job!',
        'Data Successfully Edited!',
        'success'
      )
    } 
  }

  getUser(index){
    return this.DataUser[index]
  }
}
