import { Component } from '@angular/core';
// our code
import { OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// export class AppComponent {
//   title = 'project';
// }

/// our code
export class AppComponent implements OnInit {

  // endpoint: any;
  // responseFromApi: any;
  // definition:
  constructor(private postService: PostService) {}

  // when component download trigger automatic
  ngOnInit() {
    // this.getPosts();
  }

  // getPosts() {
  //   // hier trigger a method from postService
  //   this.postService.getPosts(this.endpoint).subscribe({
  //     next: (response) => {
  //       this.responseFromApi = response;
  //       console.log(this.responseFromApi);
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //   });
  // }
}