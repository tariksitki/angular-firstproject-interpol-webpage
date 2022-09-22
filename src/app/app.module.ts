import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { CardsComponent } from './cards/cards.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, CardsComponent, FormComponent, DetailsComponent, HomeComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    // our code;
    {
      provide: 'apiUrl',
      useValue: 'https://ws-public.interpol.int/notices/v1/red',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
