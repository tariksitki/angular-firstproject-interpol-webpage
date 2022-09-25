import { Inject, Injectable } from '@angular/core';

// our code
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class PostService {
  // before @inject
  // public url = 'http://jsonplaceholder.typicode.com/posts';

  // constructor() {}
  constructor(
        // describe apiUrl in app.module.ts:
    // @Inject('apiUrl') private apiUrl: string, // type is important
    public httpClient: HttpClient
  ) {}

      // manuel method:
  apiUrl = 'https://ws-public.interpol.int/notices/v1/red';

  getPosts(endpoint: any) {
    return (
      // console.log(`${this.apiUrl}${endpoint}`),
      this.httpClient.get(`${this.apiUrl}${endpoint ? endpoint : ''}`)
    );
  }

  getDetails(endpoint: any) {
    return (
      // console.log(`${this.apiUrl}${endpoint}`),
      this.httpClient.get(`${this.apiUrl}/${endpoint ? endpoint : ''}`)
    );
  }

  /////// get images:
  getImages(endpoint: any) {
    return (
      // console.log(`${this.apiUrl}${endpoint}`),

      this.httpClient.get(`${this.apiUrl}/${endpoint ? endpoint : ''}`)
    );
  }
}
