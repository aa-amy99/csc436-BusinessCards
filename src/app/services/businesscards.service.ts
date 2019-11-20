import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { AngularFirestoreCollection} from '@angular/fire/firestore';
import { Businesscard } from '../models/businesscard.model';


@Injectable({
  providedIn: 'root'
})

export class BusinesscardsService {
  
  cardUUID: any//get ID from angularFirestore
  myCardsContainer: AngularFirestoreCollection<Businesscard>;

  constructor(private angularFirestore: AngularFirestore) {
    this.myCardsContainer = angularFirestore.collection<Businesscard>('businesscards');
  }

  getMyCardUUID(): string {
    return this.cardUUID;
  }

  getMyCardsContainers(): AngularFirestoreCollection<Businesscard> {
    return this.myCardsContainer;
  }

  addNewCard(newCard: Businesscard): Promise<void> {
    this.cardUUID = this.angularFirestore.createId();
    console.log("My new card ID: " + this.cardUUID);
    newCard.cardIndex = this.cardUUID;
    return this.myCardsContainer.doc(this.cardUUID).set(Object.assign({}, newCard));
  }

  removeMyCard(selectedCard: Businesscard, cardID: string): Promise<void> {
    console.log("[Service REMOVED] Card ID#: " + cardID);
    return this.myCardsContainer.doc(cardID).delete();
  }

  clearAllCards(cardLists: Businesscard []): Businesscard [] {
    console.log("[Service CLEARED ALL CARDS]");
    var item = 0;
    for (let bc of cardLists){
      this.removeMyCard(bc, bc.cardIndex);
      item ++;
  }
  console.log("[Service] Total Removed Cards : " + item);  
  return cardLists;
  }

  updateMyCard(selectedCard: Businesscard, cardID: string): Promise<void> {
    console.log("[Service UPDATED] Card ID#: " + cardID);
    return this.myCardsContainer.doc(cardID).update(selectedCard);
  }

  

}

