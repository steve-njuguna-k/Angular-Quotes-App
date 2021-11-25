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

  getQuotes(){
    return this.quotes;
  }

  upvote(index:any) {
    this.quotes[index].likes ++;
  }
  downvote(index:any) {
    this.quotes[index].dislikes  ++;
  }

  initialLikes!: number;
  pressedLikes!: number;
  finalQuoteLikes!: number;
  index!: number;

  rankQuotes(){
    this.initialLikes = 0
    this.pressedLikes = 0

    for(this.index=0 ; this.index < this.quotes.length; this.index++) {
      this.pressedLikes = this.quotes[this.index].likes;
      if(this.pressedLikes > this.initialLikes){
        this.initialLikes = this.pressedLikes;
        this.finalQuoteLikes = this.initialLikes;
      }
    }
    return this.finalQuoteLikes
  }

  toggleDetails(index: any){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  deleteQuote(quote:any){
    if(this.getQuotes().indexOf(quote)>= 0){
        let toDelete = confirm(`Are you sure you want to delete the quote '${this.quotes[this.quotes.indexOf(quote)].quoteDescription}' by ${this.quotes[this.quotes.indexOf(quote)].quoteAuthor}?`)
        if(toDelete){
            this.getQuotes().splice(this.getQuotes().indexOf(quote),1);
        }
    }
    this.rankQuotes();
  }

  addNewQuote(quotes: any){
    let quoteLength = this.quotes.length;
    quotes.id = quoteLength + 1;
    quotes.datePosted = new Date(quotes.datePosted);
    this.quotes.push(quotes);
    let confirmation = confirm(`Quote Added Successfully!`);
    return confirmation;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
