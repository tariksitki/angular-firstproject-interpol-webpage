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
// export class AppComponent {
//   title = 'project';
// }

/// our code
export class AppComponent implements OnInit {
  // endpoint: any;
  // responseFromApi: any;
  // definition:
  constructor(
    private postService: PostService,
    public translateService: TranslateService // translate inject
  ) {
    this.translateService.addLangs(['en', 'fr']);
  }
    // example for translate:
  public get translationFormTypeScript(): string {
    return this.translateService.instant('example5.fromTypeScript');
  }
    // for translate:
  public onChange(selectedLanguage: string): void {
    this.translateService.use(selectedLanguage);
  }

  // when component download trigger automatic
  ngOnInit() {
    // this.getPosts();
  }
  language = "";

    // get data from child element (from navbar component):
  receiveValue($event : any) {
    this.language = $event
    console.log(this.language)
    this.translateService.use(this.language);
  }
}