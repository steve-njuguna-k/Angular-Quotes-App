import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from 'src/app/models/quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input()
  quote!: Quotes;

  constructor() { }

  ngOnInit(): void {
  }

}
