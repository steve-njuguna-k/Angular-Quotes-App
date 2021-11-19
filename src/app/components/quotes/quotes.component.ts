import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/models/quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, 'Living Life', 'You only live once, but if you do it right, once is enough', 'Mae West', 'Steve Njuguna', new Date(2021,11,19), 6, 3),
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

  constructor() { }

  ngOnInit(): void {
  }

}
