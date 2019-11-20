import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { firebase } from 'src/environments/environment';
import { environment } from 'src/environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UserprofileComponent  } from './userprofile/userprofile.component';
import { BusinessCardComponent } from './businesscard/businesscard.component';
import { BusinessCardsComponent } from './businesscards/businesscards.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { WebcampageComponent } from './webcampage/webcampage.component';
import { NewcardComponent } from './newcard/newcard.component';
import { WebcamModule } from 'ngx-webcam';
import { WebCamComponent } from './webcam/webcam.component';
import { HttpClient } from 'selenium-webdriver/http';
import { Authguard } from './authguard/authguard';
import { AuthService } from './services/auth.service';
import { BusinesscardsService } from './services/businesscards.service';
import { WebcamService } from './services/webcam.service';


@NgModule({
   declarations: [
      AppComponent,
      BusinessCardComponent,
      BusinessCardsComponent,
      ErrorpageComponent,
      HomeComponent,
      LoginComponent,
      LogoutComponent,
      NewcardComponent,
      UserprofileComponent,
      WebCamComponent,
      WebcampageComponent,
     
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      WebcamModule,
      AngularFireModule.initializeApp(firebase),
      AngularFireAuthModule,
      AngularFirestoreModule,
      
   ],
   providers: [
      Authguard,
      AuthService,
      BusinesscardsService,
      WebcamService,   
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
