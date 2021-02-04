import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'Quotes to inspire you!';
  quotes:Quote[] = [
    new Quote (1,'Jean','Inspiration','Intellectual growth should commence at birth and cease only at death.','Albert Einstein', new Date(2020,10,20),0,0),
    new Quote (2,'Dalton','Growth','Without continual growth and progress,such words as improvement,achievement and success have no meaning.','Benjamin Franklin',new Date(2019,8,19),0,0),
    new Quote (3,'Barbara','Life','The single most extraordinary thing I have ever done with my life is fall in love with you.','Beth Pearson',new Date(2019,9,13),0,0),
    new Quote (4,'Warren','Beautiful','The best and most beautiful things in this world cannot be seen or even heard,but must be felt with the heart.','Hellen Keller',new Date(2019,7,7),0,0),
    new Quote (5,'Bernice','Life','Wit beyond measure is a persons greatest treasure.','Albert Dumbledore',new Date(2014,7,21),0,0),
    new Quote (6,'Kaylin','Positivity','In every day,there are 1,440 minutes.That means we have 1,440 daily opportunities to make a positive impact.','Les Brown',new Date(2019,2,15),0,0)
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote: Quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead: any, index: number){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index) {
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  ngOnInit() {
  }

}
