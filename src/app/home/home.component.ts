import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  endpoint: any;
  responseFromApi: any;
  // definition:
  constructor(private postService: PostService) {}

  // when component download trigger automatic
  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    // hier trigger a method from postService
    this.postService.getPosts(this.endpoint).subscribe({
      next: (response) => {
        this.responseFromApi = response;
        console.log(this.responseFromApi);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
