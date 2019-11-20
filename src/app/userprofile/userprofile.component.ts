import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-userProfile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.css']
})
export class UserprofileComponent  implements OnInit {
  userEmail: string;
  constructor(private authService: AuthService) {
    this.userEmail = authService.getUsername();
   }

  ngOnInit() {
  }

}
