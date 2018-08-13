import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { NewDetailsComponent } from './new-details/new-details.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule } from "@angular/forms";
import { QuoteDetailsComponent } from './quote-details/quote-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NewQuoteComponent,
    NewDetailsComponent,
    LandingPageComponent,
    QuoteDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
