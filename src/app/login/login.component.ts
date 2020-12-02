import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userLogin = 'admin';
  userPassword = '123';
  message: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.setMessage();
  }

  setMessage(): void {
    this.message = `Logged ${this.authService.isLoggedIn ? 'in' : 'out'}`;
  }

  login(): void {
    this.message = 'Trying to login';
    this.authService.login(this.userLogin, this.userPassword)
      .subscribe(res => {
        console.log(`Login subscribe  result: ${res}`);
        this.setMessage();
        if(this.authService.isLoggedIn) {
          const redirect = this.authService.resirectUrl ? this.authService.resirectUrl : '/admin';
          this.router.navigate([redirect]);
        }
      });
  }

}
