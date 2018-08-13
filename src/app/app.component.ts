import { Component } from '@angular/core';
import { Quotes } from './quotes';
import { QuotesDetailsComponent } from "./quote-details/quote-details.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuotesDetailsComponent]
})
export class AppComponent {
  quotes = [
    new Quotes(1, 'But man is not made for defeat. A man can be destroyed but not defeated.', 'Ernest Hemingway', 'Edgar',new Date(1534092833211)),
    new Quotes(2, 'There is nothing permanent except change.', 'Heraclitus', 'Sir Alex Ferguson', new Date(1534092717519)),
    new Quotes(3, 'Let us sacrifice our today so that our children can have a better tomorrow.', 'A. P. J. Abdul Kalam', 'Jimmy', new Date(1534092833211)),
    new Quotes(4,'You cannot shake hands with a clenched fist.', 'Indira Gandhi', 'Mike', new Date(1534092717519 )),
    new Quotes(5, 'Learning never exhausts the mind.', 'Leonardo da Vinci', 'Atero', new Date(1534092717519 )),
    new Quotes(6, 'There is no charm equal to tenderness of heart.', 'Jane Austen', 'Evah', new Date(1534092717519 )),
    new Quotes(7, 'All that we see or seem is but a dream within a dream.', 'Edgar Allan Poe', 'Michael', new Date(1534092482773))

  ];
  inputQuote($event){
    $event.time=new Date();
    $event.id=this.quotes.length +1;
    this.quotes.unshift($event)
  }
  }
