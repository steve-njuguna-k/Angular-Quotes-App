export class Quote {
    showDetails: boolean;
    constructor(public id: number,public quoteTitle: string,public quoteDescription: string, public quoteAuthor: string, public postAuthor: string){
      this.showDetails=false;
    }
}
