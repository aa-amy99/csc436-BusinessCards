import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BusinesscardsService } from '../services/businesscards.service';
import { Businesscard } from '../models/businesscard.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newCard',
  templateUrl: './newcard.component.html',
  styleUrls: ['./newcard.component.css']
})
export class NewcardComponent implements OnInit {
  
  @ViewChild('addNewCardForm', {static: true})
  public myForm: NgForm;
  newCard: Businesscard;
  isClicked: boolean;

  constructor(private businessCardsService: BusinesscardsService, private router: Router) { 
    this.newCard = new Businesscard();
    this.isClicked = false;
  }

  addNewCard() {
    this.toggleIsClick();
    if (this.myForm.valid == true) {
      this.businessCardsService.addNewCard(this.newCard)
      alert("The new card has been added! You will be directed to My Business Card Page");
      this.router.navigate(['/businessCards']);
    }
  }

  toggleIsClick(){
    this.isClicked = true;
  }

  ngOnInit() {}


}
