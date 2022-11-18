import { Component } from '@angular/core';
import { ServerReqService } from './server-req.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: any

  constructor(private server: ServerReqService){}

  onGetPost(){
    this.posts=this.server.getPost()
    this.posts.subscribe(data => {
      console.log(data)
    })
  }
}
