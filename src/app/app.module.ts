import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule } from "@angular/forms";
import { QuotesDetailsComponent } from './quote-details/quote-details.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    NewQuoteComponent,
    LandingPageComponent,
    QuotesDetailsComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
