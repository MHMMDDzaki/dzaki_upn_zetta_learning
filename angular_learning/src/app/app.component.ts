import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserFormService } from './user-form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
    zipcode: string,
    city: string,
    country: string
  }
  links = [{name:'Home',url:'/'}];
  activeLink = this.links[0];


  constructor(private userFormService: UserFormService){}
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

  route(param){
    
  }

  onSubmit(){
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
    this.userFormService.addUser(this.userData)
  //   console.log(this.userTemp)
  //   this.userData.push(this.userTemp)
  //   console.log(this.userData)
  }

}
