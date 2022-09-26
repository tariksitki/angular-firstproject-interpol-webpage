import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {}
    // send data from child to parent:
  @Output() msgEvent = new EventEmitter<string>(); // data from child to parent
  language = "";

  ngOnInit(): void {
  }


  changeLanguage(value : any) {
    // console.log(value.innerHTML.toLowerCase());
    this.language = value.innerHTML.toLowerCase();
    this.msgEvent.emit(this.language);
  }
}
