import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {

  newQuote =  new Quotes(0, '', '', '', new Date());
// create an event emitter which will be emitted to the parent when addQuote() is invoked.
  @Output() loadQuote = new EventEmitter<Quotes>();

// function to emit loadQuote
// while emitting loadQuote event, the value from the instance
toggleForm = false;
formToggle() {
  this.toggleForm = !this.toggleForm;
}
addQuote() {
    this.loadQuote.emit(this.newQuote);
    this.newQuote = new Quotes(0, '', '', '', new Date());
  }
  constructor() { }

  ngOnInit() {
  }

}
