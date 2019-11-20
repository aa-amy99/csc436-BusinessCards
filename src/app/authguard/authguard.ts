import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { RouterStateSnapshot, Router } from '@angular/router';
import { take, tap, map} from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';

@Injectable()
export class Authguard implements CanActivate {
  
  myAuthState: any;
  
  constructor(private authService: AuthService, private router: Router) {
    this.myAuthState = authService.authState;
  }
  
  //ref. from Angular Github #9613
  //add take(1)
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> {
      return this.myAuthState.pipe(
        take(1),map((authState) => !!authState),
        tap((loggedIn) => { 
          if (loggedIn){ 
            console.log('Successful activation');
          }
          else {
            console.log('Failed activation');
            this.router.navigate(['/login']);
          }
        }),
      );
  }

}

