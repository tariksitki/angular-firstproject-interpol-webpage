import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PostService } from '../services/post.service';
import { countryListArray } from "../../helpers/countryList";

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
  countryListArray = countryListArray;
  formValues = {
    lastname: '',
    forename: '',
    nationality: '',
    gender: '',
    ageMin: '',
    ageMax: '',
    arrestWarrantCountryId: '',
    keyword: '',
  };

  // to send data to home.component: (from child to parent component)
  @Output() formEvent = new EventEmitter<any>();

  ngOnInit(): void {
    // this.getPosts();
  }

  onSubmit() {
    this.endpoint = `?${
      this.formValues.forename && `forename=${this.formValues.forename}`
    }${this.formValues.lastname && `&name=${this.formValues.lastname}`}${
      this.formValues.nationality &&
      `&nationality=${this.formValues.nationality}`
    }${this.formValues.gender && `&sexId=${this.formValues.gender}`}${
      this.formValues.ageMin && `&ageMin=${this.formValues.ageMin}`
    }${this.formValues.ageMax && `&ageMax=${this.formValues.ageMax}`}${
      this.formValues.arrestWarrantCountryId &&
      `&arrestWarrantCountryId=${this.formValues.arrestWarrantCountryId}`
    }${
      this.formValues.keyword && `&freeText=${this.formValues.keyword}`
    }&page=1&resultPerPage=20`;

    console.log();

    /// send data from child component to parent component (to home component)
    this.formEvent.emit(this.endpoint);

    console.log(this.formValues);
    this.formValues = {
      lastname: '',
      forename: '',
      nationality: '',
      gender: '',
      ageMin: '',
      ageMax: '',
      arrestWarrantCountryId: '',
      keyword: '',
    };
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
