import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserFormService } from 'src/app/user-form.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup
  userData: {
    id: string,
    username: string,
    age: number,
    email: string,
    gender: string,
    position: string,
    maritalStatus: string,
    address: string,
    zipcode: number,
    city: string,
    country: string
  }

  constructor(private userFormService: UserFormService, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      // 'userData': new FormGroup({
      //   'username': new FormControl(null, Validators.required),
      //   'email': new FormControl(null, [Validators.required, Validators.email]),
      // }),
      'id': new FormControl(null, Validators.required),
      'username': new FormControl(null, Validators.required),
      'age': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl(null),
      'position': new FormControl(null),
      'maritalStatus': new FormControl(null),
      'addresses': new FormGroup({
        'address': new FormControl(null, Validators.required),
        'zipcode': new FormControl(null, [Validators.required]),
        'city': new FormControl(null, [Validators.required]),
        'country': new FormControl(null, [Validators.required]),
      }),
    })
  }

  onEdit(){
    this.userData = {
      id: this.signupForm.value.id,
      username: this.signupForm.value.username,
      age: this.signupForm.value.age,
      email: this.signupForm.value.email,
      gender: this.signupForm.value.gender,
      position: this.signupForm.value.position,
      maritalStatus: this.signupForm.value.maritalStatus,
      address: this.signupForm.value.addresses.address,
      zipcode: this.signupForm.value.addresses.zipcode,
      city: this.signupForm.value.addresses.city,
      country: this.signupForm.value.addresses.country
    }
    console.log(this.userData)
    this.userFormService.addUser(this.userData)
    this.router.navigate([''])
  }

}
