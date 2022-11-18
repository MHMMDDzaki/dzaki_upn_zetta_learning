import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServerReqService {
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com'

  posts: Observable<Post[]>;
  newPost: Observable<any>

  constructor(private http: HttpClient, private router: Router) { }

  getPost(){
    let params = new HttpParams().set('id','101')
    return this.posts = this.http.get<Post[]>(this.ROOT_URL + '/posts', { params })
  }

  sendPost(param){
    const data: Post = {
      id: null,
      userId: param.userId,
      title: param.title,
      body: param.body
    }
    this.newPost = this.http.post(this.ROOT_URL + '/posts', data)
    this.newPost.subscribe(data => {
      console.log(data)
    })
    this.router.navigate([''])

    return this.newPost
  }
}
