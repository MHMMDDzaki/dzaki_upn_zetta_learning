import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerReqService } from '../server-req.service';

@Component({
  selector: 'app-send-data',
  templateUrl: './send-data.component.html',
  styleUrls: ['./send-data.component.css']
})
export class SendDataComponent implements OnInit {
  signupForm: FormGroup
  userData: {
    id: string,
    username: string
  }
  constructor(private server: ServerReqService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      id: [null, Validators.required],
      username: [null, Validators.required]
    })
  }

  onSubmit(){
    console.log(this.signupForm.value)
    this.userData = {
      id: this.signupForm.value.id,
      username: this.signupForm.value.username
    }
    // console.log(this.userData)
    // if(this.userFormService.addUser(this.userData) === 1){
    //   this.router.navigate([''])
    // }
  }

}
