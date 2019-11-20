import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { WebcamImage } from 'ngx-webcam/src/app/modules/webcam/domain/webcam-image';
import { WebcamInitError } from 'ngx-webcam/src/app/modules/webcam/domain/webcam-init-error';
import { Businesscard } from '../models/businesscard.model';
import domtoimage from 'dom-to-image';
import { WebcamService } from '../services/webcam.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebCamComponent implements OnInit {
  @Output() imageBase64 = new EventEmitter();
  @Output() textDetection = new EventEmitter();
  onWebcam: boolean;
  businessCard: Businesscard;
  public webcamImage: WebcamImage = null;    // latest snapshot
  private trigger: Subject<void> = new Subject<void>();   // webcam snapshot trigger
  public errors: WebcamInitError[] = [];

  constructor(private router: Router, private webcamService: WebcamService) { 
    this.onWebcam = false;
  }

  ngOnInit() {
  }

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

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.log('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public handleInitError(error: WebcamInitError): void {
    if (error.mediaStreamError && error.mediaStreamError.name === 'NotAllowedError') {
      console.warn('Camera access was not allowed by user!');
    }
    this.errors.push(error);
  }

  convertToBase64() {
    const imgNode = document.getElementById('image');
    console.log(imgNode);
    domtoimage.toPng(imgNode)
    .then( (dataUrl: string) => {
      console.log('converting base64...');
      this.imageBase64.emit(dataUrl);
      this.webcamService.getData(dataUrl)
      .subscribe(res => {
        this.textDetection.emit(res);

      },
      (err) => {
        console.log(err);
      });

    }).catch( (e: any) => {
      console.log('SELECTED IMAGE BASE64 SOMETHING WENT WRONG');
      console.log(e);
    });
    alert("The Card Image has been added!");
          //this.router.navigate(['/businessCards']);
  }

}
