import { Component, OnInit } from '@angular/core';
import { ServerReqService } from '../server-req.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any

  constructor(private server: ServerReqService){}

  ngOnInit(): void {
    this.onGetPost()
  }

  onGetPost(){
    this.posts=this.server.getPost()
    this.posts.subscribe(data => {
      console.log(data)
    })
  }

}
