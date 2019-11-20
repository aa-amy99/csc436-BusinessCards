import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Businesscard } from '../models/businesscard.model';
import { BusinesscardsService } from '../services/businesscards.service';


@Component({
  selector: 'app-businessCards',
  templateUrl: './businesscards.component.html',
  styleUrls: ['./businesscards.component.css']
})

export class BusinessCardsComponent implements OnInit {
  cardsList: Businesscard[];

  constructor(private businessCardsService: BusinesscardsService, private router: Router) { 
    this.getCardsFromContainer();
  }
  
  sortedCards(): Businesscard[] {
    return this.cardsList.sort();
  }

  clearAllCards(cardLists: Businesscard []): void {
    this.cardsList = this.businessCardsService.clearAllCards(this.cardsList);
  }
  
  //codes from https://github.com/angular/angularfire/blob/master/docs/firestore/collections.md
  getCardsFromContainer() {
    this.businessCardsService.getMyCardsContainers().snapshotChanges()
    .pipe(map(changes =>changes.map(myCard =>({id: myCard.payload.doc.id, ...myCard.payload.doc.data()})
    ))).subscribe(bcard => {this.cardsList = bcard;});
  }


  ngOnInit() {
  }

  

}
