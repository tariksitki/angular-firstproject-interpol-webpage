import { Component } from '@angular/core';
// our code
import { OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
  /// translate:
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'project';
  language = '';
  
  constructor(
    private postService: PostService,
    public translateService: TranslateService // translate inject
  ) {
    this.translateService.addLangs(['en', 'fr']);
  }
  
  // when component download, trigger automatic
  ngOnInit() {
  }

  // get data from child element (from navbar component):
  receiveValue($event: any) {
    this.language = $event;
    this.translateService.use(this.language);
    // console.log(this.language);
  }
}