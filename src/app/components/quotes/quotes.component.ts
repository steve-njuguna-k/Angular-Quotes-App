import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/models/quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, 'Living Life', 'You only live once, but if you do it right, once is enough', 'Mae West', 'Steve Njuguna', new Date(2021,10,15), 0, 0),
    new Quotes(2, 'Money & Success', 'Money and success don’t change people; they merely amplify what is already there', 'Will Smith', 'Mark Otieno', new Date(2021,10,17), 0, 0),
    new Quotes(3, 'Predictable Life', 'If life were predictable it would cease to be life, and be without flavor', 'Eleanor Roosevelt', 'June Mwende', new Date(2021,10,19), 0, 0),
  ];

  toggleDetails(index: any){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  quoteDelete(toDelete: boolean, index: any){
    if (toDelete) {
      let confirmDelete = confirm(`Are you sure you want to delete the quote '${this.quotes[index].quoteTitle}' by ${this.quotes[index].quoteAuthor}?`)

      if (confirmDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quotes: any){
    let quoteLength = this.quotes.length;
    quotes.id = quoteLength + 1;
    quotes.datePosted = new Date(quotes.datePosted)
    this.quotes.push(quotes)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
