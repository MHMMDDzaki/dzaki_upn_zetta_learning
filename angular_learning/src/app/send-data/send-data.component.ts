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
    userId: number,
    title: string,
    body: string
  }
  constructor(private server: ServerReqService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      userId: [null, Validators.required],
      title: [null, Validators.required],
      body: [null, Validators.required]
    })
  }

  onSubmit(){
    this.userData = {
      userId: this.signupForm.value.userId,
      title: this.signupForm.value.title,
      body: this.signupForm.value.body
    }
    this.server.sendPost(this.userData)
    // if(this.userFormService.addUser(this.userData) === 1){
    //   this.router.navigate([''])
    // }
  }

}
