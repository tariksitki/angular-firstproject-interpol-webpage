import { Inject, Injectable } from '@angular/core';

// our code
import { HttpClient } from '@angular/common/http';
import { FormComponent } from '../form/form.component';


@Injectable({
  providedIn: 'root',
})
export class PostService {
  // before @inject
  // public url = 'http://jsonplaceholder.typicode.com/posts';

  // constructor() {}
  constructor(
    @Inject('apiUrl') private apiUrl: string, // type is important
    public httpClient: HttpClient
  ) {} // our code

  // get method:
  getPosts(endpoint: any) {
    // bu method bir parametre alacak ve url in sonuna eklenecek

    return (
      // console.log(`${this.apiUrl}${endpoint}`),

      this.httpClient.get(`${this.apiUrl}${endpoint ? endpoint : ''}`)
    );
  }

  ///////// get details:

  getDetails(endpoint: any) {
    // bu method bir parametre alacak ve url in sonuna eklenecek

    return (
      // console.log(`${this.apiUrl}${endpoint}`),

      this.httpClient.get(`${this.apiUrl}/${endpoint ? endpoint : ""}`)
    );
  }
}
