import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  endpoint: string = '';
  responseFromApi: any;
  // responseFromImageApi : any;

  // definition:
  constructor(private postService: PostService) {}

  // when component download trigger automatic
  ngOnInit() {
    this.getPosts();
    // console.log(this.endpoint);
    
  }
  // receive value from child component(from form Component)
  receiveValue($event: any) {
    this.endpoint = $event;
    this.getPosts();
    // console.log($event)
  }

  getPosts() {
    // hier trigger a method from postService
    this.postService.getPosts(this.endpoint).subscribe({
      next: (response) => {
        this.responseFromApi = response;
        console.log(this.responseFromApi);
        // console.log(this.endpoint)
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // getImages() {
  //   // hier trigger a method from postService
  //   this.postService.getImages(this.endpoint?.replace('/', '-')).subscribe({
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
