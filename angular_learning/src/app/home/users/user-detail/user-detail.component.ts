import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserFormService } from 'src/app/user-form.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: {
    id: string,username: string,age: number,email: string,gender: string,position: string,maritalStatus: string,address: string,zipcode: number,city: string,country: string
  }

  constructor(private userFormService: UserFormService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.user = this.userFormService.getUser(this.userFormService.DataUser.findIndex(item => { return item.id === params['id']}))
        console.log(this.user)
      })
  }

}
