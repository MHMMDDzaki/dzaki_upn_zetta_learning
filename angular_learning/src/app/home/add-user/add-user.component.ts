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
    addresses: any
  }

  constructor(private userFormService: UserFormService, private router: Router, private fb: FormBuilder){}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      id: [null, Validators.required],
      username: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      age: [null, [Validators.required, Validators.min(10)]],
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
      address: [null, Validators.required],
      zipcode: [null, Validators.required],
      city: [null, Validators.required],
      country: [null, Validators.required]
    })

    this.getAddressess.push(address_temp)
  }

  onSubmit(){
    console.log(this.signupForm.value)
    this.userData = {
      id: this.signupForm.value.id,
      username: this.signupForm.value.username,
      age: this.signupForm.value.age,
      email: this.signupForm.value.email,
      gender: this.signupForm.value.gender,
      position: this.signupForm.value.position,
      maritalStatus: this.signupForm.value.maritalStatus,
      addresses: this.signupForm.value.addresses
    }
    console.log(this.userData)
    if(this.userFormService.addUser(this.userData) === 1){
      this.router.navigate([''])
    }
  }

  onDeleteAddresses(i){
    this.getAddressess.removeAt(i)
  }

}
