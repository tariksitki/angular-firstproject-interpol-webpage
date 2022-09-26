import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { CardsComponent } from './cards/cards.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

/////// translate:
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

    // we use default informations from ngx-translate
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    FormComponent,
    DetailsComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
  ],
  exports: [TranslateModule],
  providers: [
    HttpClientModule,
    {
      provide: 'apiUrl',
      useValue: 'https://ws-public.interpol.int/notices/v1/red',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
