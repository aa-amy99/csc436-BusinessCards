import { Component, OnInit } from '@angular/core';
import { Businesscard } from '../models/businesscard.model';
@Component({
  selector: 'app-webcampage',
  templateUrl: './webcampage.component.html',
  styleUrls: ['./webcampage.component.css']
})
export class WebcampageComponent implements OnInit {
  onWebcam: boolean;
  businessCard: Businesscard;
  constructor() {  this.onWebcam = false;}
  toggleWebcam() {
    this.onWebcam = !this.onWebcam;
    this.businessCard = new Businesscard();
  }

  receiveWebcamImage(imageBase64) {
    this.businessCard.image = imageBase64;
  }

  receiveTextDetection(textDetection) {
    console.log(textDetection.responses[0].textAnnotations);
  }

  ngOnInit() {
  }

}
