import { Injectable } from '@angular/core';
import { firebase } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WebcamService {

  private url = `https://vision.googleapis.com/v1/images:annotate?key=${firebase}`;

  constructor(private http: HttpClient) { }

  getImageDataFromWebcam(snapshot: any) {
    const inputImage = snapshot.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
    return this.http.post(this.url,
      {requests: [{ image: { content: inputImage},
        features: [{type: 'TEXT_DETECTION'}]
      }]});
  }

}
