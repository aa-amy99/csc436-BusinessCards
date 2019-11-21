import { Component, OnInit } from '@angular/core';
import { Businesscard } from '../models/businesscard.model';

@Component({
  selector: 'app-webcampage',
  templateUrl: './webcampage.component.html',
  styleUrls: ['./webcampage.component.css']
})

export class WebcampageComponent implements OnInit {
  
  isWebcamON: boolean;
  businessCard: Businesscard;
  constructor() { }

  setImage(snapshot: any) { this.businessCard.image = snapshot;}
  getImage(snapshot: any) : string { return snapshot;}
  getTextImage(snapText: any) {}

  openWebcam() {
    this.isWebcamON = !this.isWebcamON;
    console.log("Webcam is ON: " + this.isWebcamON );
    this.businessCard = new Businesscard(); 
  }

  ngOnInit() {
    this.isWebcamON = false;
  }

}
