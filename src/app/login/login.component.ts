import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Validators}  from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  emptyStr: " ";
  
  constructor( private authService: AuthService, private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({ username: [this.emptyStr, Validators.required],
                                              password: [this.emptyStr, Validators.required]});
   }

  login() {
    this.authService.login(this.formGroup.value.username, this.formGroup.value.password);
  }

  ngOnInit() {}

}
