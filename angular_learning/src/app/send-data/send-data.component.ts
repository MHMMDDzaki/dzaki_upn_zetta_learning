import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerReqService } from '../server-req.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-send-data',
  templateUrl: './send-data.component.html',
  styleUrls: ['./send-data.component.css']
})
export class SendDataComponent implements OnInit {
  signupForm: FormGroup
  postTemp: any
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
    this.postTemp = this.server.sendPost(this.userData)
    this.postTemp.subscribe(data => {
      Swal.fire({
        title: `${data.id}, ${data.userId}, ${data.title}, ${data.body}.`,
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://media.tenor.com/2roX3uxz_68AAAAM/cat-space.gif")
          left top
          no-repeat
        `
      })
    })
    this.router.navigate([''])
    // if(this.userFormService.addUser(this.userData) === 1){
    //   this.router.navigate([''])
    // }
  }

}
