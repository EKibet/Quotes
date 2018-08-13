import { Component, OnInit, Input } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  @Input() quotes = Array<Quotes>();
  confirmDelete: boolean;
  templist: Array<Quotes>;

  Confirm(){
    this.confirmDelete = confirm("Are you sure you want to delete this quote?");
  }
  deleteQuote(index: number) {
    this.Confirm();
    if (this.confirmDelete) {
      this.quotes.splice(index,1);
    }
    this.confirmDelete = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
