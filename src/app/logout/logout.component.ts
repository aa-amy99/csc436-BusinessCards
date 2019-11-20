import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private myAuthService: AuthService, private router: Router) { }

  logout() {
    this.myAuthService.logout();
    console.log("User logged out");
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }
}
