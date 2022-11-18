import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerReqService {
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com'

  posts: Observable<Post[]>;
  newPost: Observable<any>

  constructor(private http: HttpClient) { }

  getPost(){
    return this.posts = this.http.get<Post[]>(this.ROOT_URL + '/posts')
  }

  sendPost(){
    // let headers = new HttpHeaders().set('Authorization','auth-token')
    // const data: Post = {

    // }
  }
}
