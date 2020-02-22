import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  constructor(private httpClient: HttpClient) { }


  getdetail(subreddit, id) {
    return this.httpClient.get(`https://www.reddit.com/r/${subreddit}/comments/${id}/.json`);
  }
}
