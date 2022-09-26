import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { countryListArray } from 'src/helpers/countryList';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  endpoint: string | null; // maybe is null
  responseFromApi: any;

  constructor(private postService: PostService, private route: ActivatedRoute) {
    // this.route.params.subscribe((params) => {
    //   this.value = params['state'];
    //   console.log(this.value);
    // });
    this.endpoint = route.snapshot.paramMap.get('state');
    // console.log(this.endpoint);
  }

  countryListArray = countryListArray;

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    // hier trigger a method from postService
    this.postService.getDetails(this.endpoint?.replace('/', '-')).subscribe({
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
