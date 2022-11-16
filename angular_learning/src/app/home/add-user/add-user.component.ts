import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserFormService } from '../../user-form.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  genders = ['Male', 'Female'];
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

  constructor(private userFormService: UserFormService, private router: Router, private fb: FormBuilder){}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      id: [null, Validators.required],
      username: [null, Validators.required],
      age: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      gender: [null, Validators.required],
      position: [null, Validators.required],
      maritalStatus: [null, Validators.required],
      addresses: this.fb.array([])
    })
  }

  get getAddressess(){
    return this.signupForm.get('addresses') as FormArray
  }

  onAddAddress(){
    const address_temp = this.fb.group({
      address: [null],
      zipcode: [null],
      city: [null],
      country: [null]
    })

    this.getAddressess.push(address_temp)
  }

  onSubmit(){
    console.log(this.signupForm.value)
    // this.userData = {
    //   id: this.signupForm.value.id,
    //   username: this.signupForm.value.username,
    //   age: this.signupForm.value.age,
    //   email: this.signupForm.value.email,
    //   gender: this.signupForm.value.gender,
    //   position: this.signupForm.value.position,
    //   maritalStatus: this.signupForm.value.maritalStatus,
    //   address: this.signupForm.value.addresses.address,
    //   zipcode: this.signupForm.value.addresses.zipcode,
    //   city: this.signupForm.value.addresses.city,
    //   country: this.signupForm.value.addresses.country
    // }
    // console.log(this.userData)
    // if(this.userFormService.addUser(this.userData) === 1){
    //   this.router.navigate([''])
    // }
  }

}
