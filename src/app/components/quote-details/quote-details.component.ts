import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from 'src/app/models/quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input()
  quote!: Quotes;
  @Output() toDelete = new EventEmitter<boolean>();

  likes(){
    this.quote.likes+=1;
  }

  quoteDelete(complete:boolean){
    this.toDelete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
