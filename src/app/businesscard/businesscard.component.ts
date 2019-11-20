import { Component, OnInit, Input } from '@angular/core';
import { Businesscard } from '../models/businesscard.model';
import { BusinesscardsService } from '../services/businesscards.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-businessCard',
  templateUrl: './businesscard.component.html',
  styleUrls: ['./businesscard.component.css']
})

export class BusinessCardComponent implements OnInit {
  
  @Input() cardsList: Businesscard[];
  selectedCardID: string;

  constructor(private router: Router, private businessCardsService: BusinesscardsService) { 
  }

  sortedCards(): Businesscard[] {
    return this.cardsList.sort();
  }

  startUpdate(selectedcard: Businesscard) {
    this.selectedCardID = selectedcard.cardIndex;
    console.log("Updating card# " + selectedcard.cardIndex);
  }

  stopUpdate() {
    this.selectedCardID = "exit";
  }

  updateMyCard(selectedcard: Businesscard) {
    this.businessCardsService.updateMyCard(selectedcard, selectedcard.cardIndex);
    alert("Your card has been UPDATED!");
    this.stopUpdate();
  }

  removeMyCard(selectedcard: Businesscard) {
    console.log("Removing card# " + selectedcard.cardIndex);
    this.businessCardsService.removeMyCard(selectedcard, selectedcard.cardIndex);

  }

  ngOnInit() 
  { }
}
