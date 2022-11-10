import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup


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
      // 'addresses': new FormGroup({
      //   'address': new FormControl(null, Validators.required),
      //   'zipcode': new FormControl(null, [Validators.required, Validators.email]),
      //   'city': new FormControl(null, [Validators.required, Validators.email]),
      //   'country': new FormControl(null, [Validators.required, Validators.email]),
      // }),
    })
  }

  onSubmit(){
    console.log(this.signupForm)
  }

}
