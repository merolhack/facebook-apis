import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [FacebookService],
})
export class LoginComponent implements OnInit {

  alreadyLoggedIn = false;

  constructor(private fb: FacebookService) {
    const initParams: InitParams = {
      appId: '2521753187863182',
      cookie: true,
      xfbml: true,
      version: 'v4.0'
    };
    fb.init(initParams);
  }

  ngOnInit() {
    this.checkLoginState();
  }

  checkLoginState() {
    this.fb.getLoginStatus().then(response => {
      console.log('getLoginStatus - response:', response);
      if (typeof response.status !== 'undefined' && response.status != null) {
        this.alreadyLoggedIn = (response.status === 'connected');
      }
    });
  }

  login(): void {
    this.fb.login()
      .then((response: LoginResponse) => {
        console.log('login - response:', response);
        this.checkLoginState();
      })
      .catch((error: any) => {
        console.error('login - error:', error);
      });
  }
}
