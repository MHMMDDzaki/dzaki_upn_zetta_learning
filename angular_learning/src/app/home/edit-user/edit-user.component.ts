import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserFormService } from 'src/app/user-form.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
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

  constructor(private userFormService: UserFormService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.userData = this.userFormService.getUser(this.userFormService.DataUser.findIndex(item => { return item.id === params['id']}))
        console.log(this.userData)
      })
    
    this.signupForm = new FormGroup({
      // 'userData': new FormGroup({
      //   'username': new FormControl(null, Validators.required),
      //   'email': new FormControl(null, [Validators.required, Validators.email]),
      // }),
      'id': new FormControl(this.userData.id, Validators.required),
      'username': new FormControl(this.userData.username, Validators.required),
      'age': new FormControl(this.userData.age, Validators.required),
      'email': new FormControl(this.userData.email, [Validators.required, Validators.email]),
      'gender': new FormControl(this.userData.gender, Validators.required),
      'position': new FormControl(this.userData.position, Validators.required),
      'maritalStatus': new FormControl(this.userData.maritalStatus, Validators.required),
      'addresses': new FormGroup({
        'address': new FormControl(this.userData.address, Validators.required),
        'zipcode': new FormControl(this.userData.zipcode, [Validators.required]),
        'city': new FormControl(this.userData.city, [Validators.required]),
        'country': new FormControl(this.userData.country, [Validators.required]),
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
    this.userFormService.editUser(this.userData)
    this.router.navigate([''])
  }

}
