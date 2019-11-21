import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import domtoimage from 'dom-to-image';
import { WebcamImage } from 'ngx-webcam/src/app/modules/webcam/domain/webcam-image';
import { WebcamInitError } from 'ngx-webcam/src/app/modules/webcam/domain/webcam-init-error';
import { WebcamService } from '../services/webcam.service';


@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebCamComponent implements OnInit {
  
  @Output() snapshot = new EventEmitter();
  @Output() snaptext = new EventEmitter();
  mysnapshot: Subject<void>;   
  myWebcamPic: WebcamImage;   

  constructor(private router: Router, private webcamService: WebcamService) { 
    this.myWebcamPic = null;
    this.mysnapshot = new Subject<void>();
  }

  retakePhoto() {
    this.myWebcamPic =null
  }

  takeSnapShot(): void {
    this.mysnapshot.next();
  }

  getMyImage(webcamImage: WebcamImage): void {
    this.myWebcamPic = webcamImage;
  }

   getImageError(err: WebcamInitError): void {
    if (err.mediaStreamError){
      if(err.mediaStreamError.name === 'NotAllowedError') {
      console.log('Webcam prohibited by user');
    }
  }
}

  //Codes are modified from https://www.npmjs.com/package/dom-to-image-more
  detectTextImage() {
    domtoimage.toPng(document.getElementById('image')).then( (src: string) => {
      this.snapshot.emit(src);
      this.webcamService.getImageDataFromWebcam(src).subscribe(output => {
        this.snaptext.emit(output);});
    alert("Text Detection Fails!");        
  });
  }

  public get observeSnapShot(): Observable<void> {
    return this.mysnapshot.asObservable();
  }


  ngOnInit() 
  {}

}
