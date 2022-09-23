import { Component, Input, OnInit } from '@angular/core';
import { countryListArray, countryListObj } from 'src/helpers/countryList';
  // router
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  constructor(private router: Router) {
    
  } // router
  countryListObj = countryListObj;
  countryListArray = countryListArray;

  @Input() responseFromApi: any;

  ngOnInit(): void {
    
  }

  // goToDetails() {
  //   this.router.navigate(["/details"])
  // }

}
