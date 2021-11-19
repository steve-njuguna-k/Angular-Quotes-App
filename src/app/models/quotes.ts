export class Quotes {
    showDetails: boolean;
    constructor(
        public id: number,
        public quoteTitle: string,
        public quoteDescription: string, 
        public quoteAuthor: string, 
        public postAuthor: string, 
        public datePosted: Date,
        public likes:number, 
        public dislikes:number
    ){
      this.showDetails=false;
    }
}
