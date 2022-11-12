import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserFormService } from '../../user-form.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input('userList') listUser: {
    id: string,username: string,age: number,email: string,gender: string,position: string,maritalStatus: string,address: string,zipcode: number,city: string,country: string
  }
  
  constructor(private userFormService: UserFormService, private router: Router) { }

  ngOnInit(): void {
    // this.listUser = this.userFormService.DataUser
  }

}
