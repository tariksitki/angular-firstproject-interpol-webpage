import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app-component/app.component';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(private postService: PostService) {}

  // posts: any;
  title = 'Filter Criteria';
  endpoint: any;
  responseFromApi: any;

  // to send data to home.component: (from child to parent component)
  @Output() formEvent = new EventEmitter<any>();

  ngOnInit(): void {
    // this.getPosts();
  }

  templateForm(
    lastname: string,
    firstname: string,
    nationality: string,
    value: any,
    ageMin: string,
    ageMax: string,
    arrestWarrantCountryId: string,
    keyword: string
  ) {
    this.endpoint = `?${firstname && `forename=${firstname}`}${
      lastname && `&name=${lastname}`
    }${nationality && `&nationality=${nationality}`}${
      value.gender && `&sexId=${value.gender}`
    }${ageMin && `&ageMin=${ageMin}`}${ageMax && `&ageMax=${ageMax}`}${
      arrestWarrantCountryId &&
      `&arrestWarrantCountryId=${arrestWarrantCountryId}`
    }${keyword && `&freeText=${keyword}`}&page=1&resultPerPage=160`;

    // this.getPosts();
    console.log(this.endpoint)

      /// send data from child component to parent component
    this.formEvent.emit(this.endpoint)
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
