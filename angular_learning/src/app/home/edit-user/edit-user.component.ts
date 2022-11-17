import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
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
    addresses: any
  }

  constructor(private userFormService: UserFormService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.userData = this.userFormService.getUser(this.userFormService.DataUser.findIndex(item => { return item.id === params['id']}))
        console.log(this.userData)
      })
  
      this.signupForm = this.fb.group({
        id: [this.userData.id, Validators.required],
        username: [this.userData.username, Validators.required],
        age: [this.userData.age, Validators.required],
        email: [this.userData.email, [Validators.required, Validators.email]],
        gender: [this.userData.gender, Validators.required],
        position: [this.userData.position, Validators.required],
        maritalStatus: [this.userData.maritalStatus, Validators.required],
        addresses: this.fb.array([this.userData.addresses])
      })

      // this.getAddressess2.push(this.userData.addresses)
  }

  get getAddressess2(){
    return this.signupForm.get('addresses') as FormArray
  }

  onEdit(){
    // this.userData = {
    //   id: this.signupForm.value.id,
    //   username: this.signupForm.value.username,
    //   age: this.signupForm.value.age,
    //   email: this.signupForm.value.email,
    //   gender: this.signupForm.value.gender,
    //   position: this.signupForm.value.position,
    //   maritalStatus: this.signupForm.value.maritalStatus,
    //   // addresses: this.signupForm.value.addresses
    //   // zipcode: this.signupForm.value.addresses.zipcode,
    //   // city: this.signupForm.value.addresses.city,
    //   // country: this.signupForm.value.addresses.country
    // }
    console.log(this.userData)
    this.userFormService.editUser(this.userData)
    this.router.navigate([''])
  }

}
