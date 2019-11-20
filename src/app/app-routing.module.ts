import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Authguard } from './authguard/authguard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BusinessCardsComponent } from './businesscards/businesscards.component';
import { NewcardComponent } from './newcard/newcard.component';
import { WebcampageComponent} from './webcampage/webcampage.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ErrorpageComponent} from './errorpage/errorpage.component';

const myRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [ Authguard ]},
  { path: 'businessCards', component: BusinessCardsComponent, canActivate: [ Authguard ]},
  { path: 'newCard', component: NewcardComponent, canActivate: [ Authguard ]},
  { path: 'webcam', component: WebcampageComponent, canActivate: [ Authguard ]},
  { path: 'userProfile', component: UserprofileComponent, canActivate: [ Authguard ]},
  { path: '**', component: ErrorpageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(myRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
