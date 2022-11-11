import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserFormService } from '../user-form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private userFormService: UserFormService, private router: Router) { }

  ngOnInit(): void {
  }

}
