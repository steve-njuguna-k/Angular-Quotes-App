import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/models/quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quote: Quotes[] = [
    new Quotes(1, 'Living Life', 'You only live once, but if you do it right, once is enough', 'Mae West', 'Steve Njuguna'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
