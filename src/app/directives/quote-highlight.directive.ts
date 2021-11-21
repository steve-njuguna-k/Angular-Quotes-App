import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appQuoteHighlight]'
})
export class QuoteHighlightDirective {

  constructor(elem:ElementRef) {
    //elem.nativeElement.style.backgroundColor="#00acee",
    //elem.nativeElement.style.color="#ffffff",
    elem.nativeElement.style.border = "1px double #03d87f";
  }

}
