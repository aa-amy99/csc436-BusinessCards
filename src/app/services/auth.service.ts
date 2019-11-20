import { Injectable } from '@angular/core';
import {auth} from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

interface User {//firebase.User
  displayName: string;
  uid: string;
  email: string;
  emailVerified?: boolean
  isAnonymous?: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  authState: Observable<User>;
  myUser: string;
  userData: any;
  isNotMatched: boolean;

  constructor(private fireAuth: AngularFireAuth, private router: Router) {
    this.authState = fireAuth.authState;
    this.myUser = "myUser";
   }

   login(username: string, password: string) {
    this.fireAuth.auth.signInWithEmailAndPassword(username, password).then(() => {
      this.myUser = username;
      this.isNotMatched = false;
      console.log("Signed-in sucessfully with " + this.myUser);
      localStorage.setItem('username', this.myUser);
      this.router.navigate(['/home']);
    }).catch(error => { 
      this.isNotMatched = true;
      console.log(error.message);});
  }

  getUsername(): string {
  return this.myUser;
  }

  getUser(): any {
    //return null or username if successfully logged in
    return localStorage.getItem('username');
  }

  isAuthorized(): boolean {
    return this.getUser() !== null;
  }

  logout() {
    console.log("Signed-out from " + this.myUser);
    localStorage.removeItem('username');
    this.fireAuth.auth.signOut();
    this.router.navigate(['/login']);
  }
}
