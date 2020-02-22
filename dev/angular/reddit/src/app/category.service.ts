import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getlist() {
    return this.httpClient.get('https://www.reddit.com/hot/.json');
  }
}
