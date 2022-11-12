import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserFormService } from '../user-form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listUsers: {
    id: string,username: string,age: number,email: string,gender: string,position: string,maritalStatus: string,address: string,zipcode: number,city: string,country: string
  }[] = []
  
  constructor(private userFormService: UserFormService, private router: Router) { }

  ngOnInit(): void {
    this.listUsers = this.userFormService.DataUser
    console.log(this.listUsers)
  }

}
